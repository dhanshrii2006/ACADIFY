# Acadify Development Environment Startup Script
Write-Host "🚀 Starting Acadify Development Environment..." -ForegroundColor Green
Write-Host ""

# Function to start processes
function Start-AcadifyServers {
    Write-Host "📦 Starting Backend Server..." -ForegroundColor Yellow
    
    # Start backend server in new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm start" -WindowStyle Normal
    
    # Wait a bit for backend to start
    Start-Sleep -Seconds 3
    
    Write-Host "⚛️  Starting React Client..." -ForegroundColor Cyan
    
    # Start frontend in new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\acadify-client'; npm start" -WindowStyle Normal
    
    Write-Host ""
    Write-Host "✅ Development servers are starting up!" -ForegroundColor Green
    Write-Host "📱 Frontend will be available at: http://localhost:3000" -ForegroundColor White
    Write-Host "🔧 Backend will be available at: http://localhost:5000" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 Close the terminal windows to stop the servers" -ForegroundColor Gray
}

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Please run this script from the project root directory." -ForegroundColor Red
    exit 1
}

# Check if acadify-client directory exists
if (-not (Test-Path "acadify-client")) {
    Write-Host "❌ Error: acadify-client directory not found." -ForegroundColor Red
    exit 1
}

# Start the servers
Start-AcadifyServers

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")