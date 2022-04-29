(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{387:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tutorial-one-minimal-apis-101"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-one-minimal-apis-101"}},[t._v("#")]),t._v(" Tutorial One: Minimal APIs 101")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("h3",{attrs:{id:"pre-requisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[t._v("#")]),t._v(" Pre-requisites")]),t._v(" "),s("p",[t._v("Before you can start building a minimal API, please install the following:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://dotnet.microsoft.com/download/dotnet/6.0",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET 6 SDK"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("An editor of your choice, such as "),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://visualstudio.microsoft.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"create-your-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-app"}},[t._v("#")]),t._v(" Create your app")]),t._v(" "),s("p",[t._v("Run the following command using the dotnet CLI.")]),t._v(" "),s("p",[s("code",[t._v("dotnet new web -o TodoApi")])]),t._v(" "),s("p",[t._v("That's it!")]),t._v(" "),s("h3",{attrs:{id:"run-your-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-your-app"}},[t._v("#")]),t._v(" Run your app")]),t._v(" "),s("p",[t._v("Now, that you have created your minimal API you can now run it. To run your application navigate to the "),s("code",[t._v("TodoApi")]),t._v(" folder and type the command below")]),t._v(" "),s("p",[s("code",[t._v("cd TodoApi")])]),t._v(" "),s("p",[s("code",[t._v("TodoApi> dotnet run")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/2546640/125850290-968b36c6-db5c-4dec-982b-496bc6d63aa4.gif",alt:"dotnet-new-api"}})]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("info: Microsoft.Hosting.Lifetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      Now listening on: https://localhost:5001\ninfo: Microsoft.Hosting.Lifetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      Now listening on: http://localhost:5000\ninfo: Microsoft.Hosting.Lifetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      Application started. Press Ctrl+C to shut down.\ninfo: Microsoft.Hosting.Lifetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      Hosting environment: Development\ninfo: Microsoft.Hosting.Lifetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("Click on the localhost link or navigate to the port in a browser. You'll see the text "),s("code",[t._v("Hello World!")]),t._v(" as the browser makes a request to your app and displays the output.")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("Note: the localhost port depends on your machine. In this example the port is 5000, but yours could be something else.")])])]),t._v(" "),s("p",[t._v("To shut down the application, go back to the terminal window and enter "),s("code",[t._v("ctrl + C")]),t._v(" .")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/2546640/125180054-9f27f380-e1c3-11eb-8769-4ddfbe358668.gif",alt:"dotnetwatchrun"}})]),t._v(" "),s("h3",{attrs:{id:"add-a-new-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-new-route"}},[t._v("#")]),t._v(" Add a new route")]),t._v(" "),s("p",[t._v("Import your "),s("code",[t._v("TodoApi")]),t._v(" folder in an editor of your choice and open the "),s("code",[t._v("Program.cs")]),t._v(" file.")]),t._v(" "),s("p",[t._v("Your "),s("code",[t._v("Program.cs")]),t._v(" looks like this:")]),t._v(" "),s("div",{staticClass:"language-cs line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MapGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("In "),s("code",[t._v("Program.cs")]),t._v(", create a new route to our api that returns a list items under "),s("code",[t._v("/todo")]),t._v(". Call "),s("code",[t._v("MapGet")]),t._v(" again after "),s("code",[t._v('app.MapGet("/", () => "Hello World!");')])]),t._v(" "),s("div",{staticClass:"language-cs line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MapGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/todo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Water plants"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Complete "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("C# Tip: "),s("code",[t._v("Item")]),t._v(" and "),s("code",[t._v("Complete")]),t._v(" are referred to as "),s("a",{attrs:{href:"https://docs.microsoft.com/dotnet/csharp/fundamentals/types/anonymous-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("anonymous types"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("Save your changes and build your app again. This route will now return one Todo item when you navigate to\n"),s("code",[t._v("https://localhost:[YOUR_PORT_HERE]/todo")]),t._v(".")]),t._v(" "),s("p",[t._v("You'll see the JSON response:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Water Plants"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isComplete"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("blockquote",[s("p",[t._v("Please note the your port number may be different.")])]),t._v(" "),s("h3",{attrs:{id:"learning-checklist-one-✔️"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learning-checklist-one-✔️"}},[t._v("#")]),t._v(" Learning checklist one ✔️")]),t._v(" "),s("ul",[s("li",[t._v("Created a new route "),s("code",[t._v("/todo")])]),t._v(" "),s("li",[t._v("Used the "),s("code",[t._v("GET")]),t._v(" HTTP Request method "),s("code",[t._v("MapGet")])])]),t._v(" "),s("h2",{attrs:{id:"add-visual-interactive-documentation-to-your-new-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-visual-interactive-documentation-to-your-new-api"}},[t._v("#")]),t._v(" Add visual interactive documentation to your new API")]),t._v(" "),s("h3",{attrs:{id:"what-is-swagger-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-swagger-ui"}},[t._v("#")]),t._v(" What is Swagger UI?")]),t._v(" "),s("p",[t._v("It is difficult to learn how to use an API just by parsing through the code and runtime logs. Swagger UI allows both you and users of your application to visualize and interact with the API's resources through an interface automatically generated from your OpenAPI (formerly Swagger) Specification.")]),t._v(" "),s("p",[t._v("Follow the steps below to add your first piece of Swagger Specification and work with your API's resources directly!")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/2546640/125180523-0005fa80-e1c9-11eb-885c-46b7bbb9fef3.gif",alt:"swaggertodo"}})]),t._v(" "),s("p",[s("strong",[t._v("Install the Microsoft OpenAPI and Swagger packages.")])]),t._v(" "),s("p",[t._v("In a terminal window, type the following command:")]),t._v(" "),s("div",{staticClass:"language-console line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("TodoApi> dotnet add package Swashbuckle.AspNetCore --version 6.1.4\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("To include Swagger UI in your application, add the following two code snippets:")]),t._v(" "),s("p",[s("strong",[t._v("Snippet 1")])]),t._v(" "),s("p",[t._v("Under "),s("code",[t._v("var builder = WebApplication.CreateBuilder(args);")]),t._v(", add the following lines of code:")]),t._v(" "),s("div",{staticClass:"language-cs line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddEndpointsApiExplorer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSwaggerGen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SwaggerDoc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("OpenApiInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Todo API"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Description "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Keep track of your tasks"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("The "),s("code",[t._v("AddSwaggerGen")]),t._v(" method adds information such as title, description, and version to your API that can be read as documentation for your users.")]),t._v(" "),s("p",[s("strong",[t._v("Snippet 2")])]),t._v(" "),s("p",[t._v("Above "),s("code",[t._v('app.MapGet("/", () => "Hello World!");')]),t._v(", add the following lines of code:")]),t._v(" "),s("div",{staticClass:"language-cs line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cs"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseSwagger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseSwaggerUI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SwaggerEndpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/swagger/v1/swagger.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Todo API V1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("These lines of code do the following:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("app.UseSwagger")]),t._v(" enables middleware to serve the generated OpenAPI description as JSON content.")]),t._v(" "),s("li",[s("code",[t._v("app.UseSwaggerUI")]),t._v(" enables middleware to serve the Swagger UI elements.")]),t._v(" "),s("li",[s("code",[t._v("SwaggerEndpoint")]),t._v(" specifies the endpoint of the OpenAPI description.")])]),t._v(" "),s("p",[t._v("Go back to your browser where your app is and navigate to this URL "),s("code",[t._v("https://localhost:[YOUR_PORT_HERE]/swagger")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/2546640/125180553-49eee080-e1c9-11eb-99f5-0b093210f13a.png",alt:"swaggerUI"}})]),t._v(" "),s("p",[t._v("Now that Swagger UI is set up, you can visualize and interact with your API.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/2546640/125180523-0005fa80-e1c9-11eb-885c-46b7bbb9fef3.gif",alt:"swaggertodo"}})]),t._v(" "),s("h3",{attrs:{id:"learning-checklist-✔️"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learning-checklist-✔️"}},[t._v("#")]),t._v(" Learning checklist ✔️")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Configured and implemented OpenAPI and Swagger UI to create visual and interactive documentation for your API.")])]),t._v(" "),s("li",[s("p",[t._v("Introduced to middleware and dependency injection.")]),t._v(" "),s("ul",[s("li",[s("p",[s("em",[t._v("Middleware")]),t._v(" is software that acts as a part of an app pipeline to handle requests and responses - essentially, additional functionality you add to your application.")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Dependency injection")]),t._v(" is when an object that another object depends on, or a dependency, is provided instead of being constructed from scratch. For example, injecting the dependency of OpenAPI specifications.")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);