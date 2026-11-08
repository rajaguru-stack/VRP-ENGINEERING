# Test browser screenshot capture using headless msedge
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$artifactDir = "C:\Users\ELCOT\.gemini\antigravity\brain\622836c1-d6a9-4a2a-8dd5-beb5164caab9"

# Start preview server
$proc = Start-Process -FilePath "npm.cmd" -ArgumentList "run preview -- --port 4173" -PassThru -NoNewWindow
Start-Sleep -Seconds 3

try {
    # 1. Desktop Screenshot (1280x800)
    $desktopOut = Join-Path $artifactDir "screenshot-desktop.png"
    & "$edgePath" --headless --disable-gpu --window-size=1280,800 "--screenshot=$desktopOut" "http://localhost:4173/"
    Write-Output "Captured desktop screenshot: $desktopOut"

    # 2. Mobile Screenshot (390x844)
    $mobileOut = Join-Path $artifactDir "screenshot-mobile.png"
    & "$edgePath" --headless --disable-gpu --window-size=390,844 "--screenshot=$mobileOut" "http://localhost:4173/"
    Write-Output "Captured mobile screenshot: $mobileOut"

    # 3. Services Screenshot (1280x800)
    $servicesOut = Join-Path $artifactDir "screenshot-services.png"
    & "$edgePath" --headless --disable-gpu --window-size=1280,800 "--screenshot=$servicesOut" "http://localhost:4173/#/services"
    Write-Output "Captured services screenshot: $servicesOut"

    # 4. Contact Screenshot (1280x800)
    $contactOut = Join-Path $artifactDir "screenshot-contact.png"
    & "$edgePath" --headless --disable-gpu --window-size=1280,800 "--screenshot=$contactOut" "http://localhost:4173/#/contact"
    Write-Output "Captured contact screenshot: $contactOut"

} finally {
    Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
}

