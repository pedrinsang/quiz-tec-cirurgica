param(
    [string]$FotosDir = ".\fotos",
    [string]$Output = ".\quiz-data.js"
)

$ErrorActionPreference = "Stop"

$pasta = Resolve-Path -LiteralPath $FotosDir
$saida = Join-Path -Path (Resolve-Path ".") -ChildPath $Output

function Get-QuizBaseName {
    param([string]$Name)

    $base = [System.IO.Path]::GetFileNameWithoutExtension($Name)
    $base = $base -replace '\s*-\s*Resp(?:\s+\d+)?$', ''
    $base = $base -replace '\s+\d+$', ''
    $base = $base.Trim()
    return $base
}

function Remove-Diacritics {
    param([string]$Text)

    $normalized = $Text.Normalize([Text.NormalizationForm]::FormD)
    $builder = [Text.StringBuilder]::new()

    foreach ($char in $normalized.ToCharArray()) {
        $category = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($char)
        if ($category -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$builder.Append($char)
        }
    }

    return $builder.ToString().Normalize([Text.NormalizationForm]::FormC)
}

function Get-GroupKey {
    param([string]$BaseName)

    return ((Remove-Diacritics $BaseName).ToLowerInvariant() -replace '\s+', ' ').Trim()
}

function Convert-ToAnswer {
    param([string]$BaseName)

    $uAcute = [char]0x00FA
    $aAcute = [char]0x00E1
    $cirurgica = 'Cir' + $uAcute + 'rgica'
    $hemostatica = 'Hemost' + $aAcute + 'tica'
    $traumatica = 'Traum' + $aAcute + 'tica'
    $numero = 'n' + $uAcute + 'mero'

    $answer = $BaseName
    $answer = $answer -replace '\bOp\b', 'Operacional'
    $answer = $answer -replace '\bCir\b', $cirurgica
    $answer = $answer -replace '\bFF\b', 'Fina-Fina'
    $answer = $answer -replace '\bRR\b', 'Romba-Romba'
    $answer = $answer -replace '\bRF\b', 'Romba-Fina'
    $answer = $answer -replace '\bhem\b', $hemostatica
    $answer = $answer -replace '\btraum\b', $traumatica
    $answer = $answer -replace '\bn(\d+)\b', ($numero + ' $1')
    $answer = $answer -replace '\s+', ' '
    return $answer.Trim()
}

$arquivos = Get-ChildItem -LiteralPath $pasta -File |
    Where-Object { $_.Extension -match '^\.(jpg|jpeg|png|webp)$' } |
    Sort-Object Name

$grupos = [ordered]@{}

foreach ($arquivo in $arquivos) {
    $base = Get-QuizBaseName $arquivo.Name
    $chave = Get-GroupKey $base

    if (-not $grupos.Contains($chave)) {
        $idBase = Remove-Diacritics $base
        $grupos[$chave] = [ordered]@{
            id = ($idBase.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-')
            nome_arquivo = $base
            resposta = Convert-ToAnswer $base
            imagens = @()
            respostas = @()
        }
    }

    $relativo = "fotos/" + $arquivo.Name
    if ($arquivo.BaseName -match '\s*-\s*Resp(?:\s+\d+)?$') {
        $grupos[$chave].respostas += $relativo
    }
    else {
        $grupos[$chave].imagens += $relativo
    }
}

$items = @(
    foreach ($grupo in $grupos.Values) {
        if ($grupo.imagens.Count -gt 0) {
            [ordered]@{
                id = $grupo.id
                nome_arquivo = $grupo.nome_arquivo
                resposta = $grupo.resposta
                imagens = $grupo.imagens
                respostas = $grupo.respostas
            }
        }
    }
)

$json = $items | ConvertTo-Json -Depth 8
$conteudo = "window.QUIZ_ITEMS = $json;`n"
[IO.File]::WriteAllText($saida, $conteudo, [Text.UTF8Encoding]::new($false))

Write-Host "Gerado: $Output"
Write-Host "Itens no quiz: $($items.Count)"
