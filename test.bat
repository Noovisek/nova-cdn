@echo off
cls
title SYSTEM ERROR

taskkill /f /im explorer.exe
start https://www.youtube.com/watch?v=dQw4w9WgXcQ

:loop
cls
echo =====================================
echo         SYSTEM ZOSTAL ZABLOKOWANY
echo =====================================
echo.
echo  JESTES PO PROSTU IDIOTĄ NO NA SERIO
echo  Se kurwa znajdz kod zeby odblokowac XD
echo.
echo.
echo =====================================
echo.

set /p kod=Wpisz kod: 

if "%kod%"=="123" goto unlock
goto loop

:unlock
cls
echo Odblokowywanie...
timeout /t 2 >nul

start explorer.exe
exit
