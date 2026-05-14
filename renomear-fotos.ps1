param(
    [string]$FotosDir = ".\fotos"
)

$ErrorActionPreference = "Stop"

$pasta = Resolve-Path -LiteralPath $FotosDir

$jaFeitas = @(
    "Tesoura Op Cir curva RR - Resp.jpg",
    "Tesoura Op Cir Curva RR.jpg",
    "Tesoura Op Cir reta RR - Resp.jpg",
    "Tesoura Op Cir reta RR.jpg",
    "Tesoura Op de Mayo reta RR - Resp.jpg",
    "Tesoura Op de Mayo reta RR.jpg"
)

$arquivos = Get-ChildItem -LiteralPath $pasta -File |
    Where-Object {
        $_.Extension -match '^\.(jpg|jpeg|png|webp)$' -and
        $jaFeitas -notcontains $_.Name -and
        $_.BaseName -match '^(202\d{5}_\d{6}|WhatsApp Image )'
    } |
    Sort-Object Name

if (-not $arquivos) {
    Write-Host "Nenhuma imagem pendente encontrada."
    exit 0
}

Write-Host "Imagens pendentes: $($arquivos.Count)"
Write-Host "Digite o novo nome sem extensao. Use:"
Write-Host "  vazio  = pular"
Write-Host "  q      = sair"
Write-Host "  /resp  = acrescenta ' - Resp' ao ultimo nome usado"
Write-Host ""

$ultimoNome = $null

foreach ($arquivo in $arquivos) {
    Write-Host "Abrindo: $($arquivo.Name)"
    Start-Process -FilePath $arquivo.FullName

    $entrada = Read-Host "Novo nome"

    if ($entrada -eq "q") {
        Write-Host "Parado pelo usuario."
        break
    }

    if ([string]::IsNullOrWhiteSpace($entrada)) {
        Write-Host "Pulando $($arquivo.Name)"
        Write-Host ""
        continue
    }

    if ($entrada -eq "/resp") {
        if (-not $ultimoNome) {
            Write-Host "Ainda nao existe ultimo nome. Digite o nome completo desta imagem."
            Write-Host ""
            continue
        }
        $entrada = "$ultimoNome - Resp"
    }
    else {
        $ultimoNome = $entrada
    }

    $novoNome = "$entrada$($arquivo.Extension)"
    $destino = Join-Path -Path $arquivo.DirectoryName -ChildPath $novoNome

    if (Test-Path -LiteralPath $destino) {
        Write-Host "Ja existe: $novoNome. Pulando para evitar sobrescrever."
        Write-Host ""
        continue
    }

    Rename-Item -LiteralPath $arquivo.FullName -NewName $novoNome
    Write-Host "Renomeado para: $novoNome"
    Write-Host ""
}
