@echo off
:c
echo.
echo.
echo.
echo		Welcome to Brady R's menu!
echo.
echo 		enter 1 for menu 1:
echo 		enter 2 for menu 2:
set /p ans="Enter Number:"


if %ans%==1 (
goto a
)

if %ans%==2 (
goto b
)




:a
cls
		
echo.
echo.
echo.
echo.
echo 			you are at menu 1 :D
echo					 A. Check weather
echo						B. launch calculator
echo							C. exit
set /p ans="Enter letter:"



if %ans%==A (
start chrome https://weather.com/weather/today/l/7d9de80387c4ccfacac03ad0625602f33d7aa1d2eeb6a7ef74b438b883fe968c
)

if %ans%==a (
start chrome https://weather.com/weather/today/l/7d9de80387c4ccfacac03ad0625602f33d7aa1d2eeb6a7ef74b438b883fe968c
)

if %ans%==B (
start C:\Windows\system32\calc.exe
)

if %ans%==b (
start C:\Windows\system32\calc.exe
goto c
)

if %ans%==C (
exit
)

if %ans%==c (
exit
)

pause
goto c

:b
cls
echo.
echo.
echo.
echo.
echo.
echo		 you are at menu 2 D:
echo.
echo.
echo 			5. Restart this system
echo.		
echo			6. Shutdown this system
echo.
echo.
echo			7. Exit
echo.
set /p ans="Enter number:"


if %ans%==5 (
shutdown -r
goto c
)

if %ans%==6 (
shutdown /s

)

if %ans%==7 (
exit
)


pause
goto c
