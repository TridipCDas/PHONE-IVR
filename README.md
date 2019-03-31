# PHONE-IVR

Build an Phone IVR System using Kookoo.in and Node.js.

An IVR(Interactive voice response) is a technology that allows a computer to interact with humans through the use of voice and DTMF tones input via a keypad.
 
What is Kookoo.in?
KooKoo is an interface between your web application and the caller. It takes phone commands from you and executes them on your behalf to the caller. The best way to think of KooKoo is as just another web page in your application. Only difference is, the web page is accessible from the phone rather than the browser 

How does Kookoo work??
1.Caller calls the KooKoo number.
2.KooKoo informs your application(HTTP request).
3.You tell KooKoo what to do (Play some text, collect input, send sms, record etc)(XML Response).
4.KooKoo performs the action on your behalf.
5.KooKoo sends you the result of the action to your application(HTTP Request).

What this application will do??
This is an application created  using KooKoo.in and Node.js to create the following flow for incoming calls :
1. When the user calls the number, ask them if they are male(1) or female(2)
2. If the user chooses male, then ask them if they are above 21(1), or below(2). For
females ask them if they are above 18(1) or below(2)
3.If the user chooses 1 above, play the message - "You are an adult", else play the
message "Minors are not allowed".
4.When user press any other options apart from this, play the message-"Sorry wrong option pressed;Phone is going to Disconnect Now!"
5.End the call

 
 
