To understand how useful patterns can be, let's review a very simple element selection problem that the jQuery library solves for us.

Imagine that we have a script where for each DOM element found on a page with class "foo" we wish to increment a counter. What's the most efficient way to query for this collection of elements? Well, there are a few different ways this problem could be tackled:

Select all of the elements in the page and then store references to them. Next, filter this collection and use regular expressions (or another means) to only store those with the class "foo".

Use a modern native browser feature such as querySelectorAll() to select all of the elements with the class "foo".
Use a native feature such as getElementsByClassName() to similarly get back the desired collection.

So, which of these options is the fastest? It's actually option 3. by a factor of 8-10 times the alternatives. In a real-world application however, 3. will not work in versions of Internet Explorer below 9 and thus it's necessary to use 1. where both 2. and 3. aren't supported.

Developers using jQuery don't have to worry about this problem however, as it's luckily abstracted away for us using the Facade pattern. As we'll review in more detail later, this pattern provides a simple set of abstracted interfaces (e.g $el.css(), $el.animate()) to several more complex underlying bodies of code. As we've seen, this means less time having to be concerned about implementation level details.

Behind the scenes, the library simply opts for the most optimal approach to selecting elements depending on what our current browser supports and we just consume the abstraction layer.

We're probably all also familiar with jQuery's $("selector"). This is significantly more easy to use for selecting HTML elements on a page versus having to manually opt for getElementById(), getElementsByClassName(), getElementByTagName() and so on.

Although we know that querySelectorAll() attempts to solve this problem, compare the effort involved in using jQuery's Facade interfaces vs. selecting the most optimal selection paths ourselves. There's no contest! Abstractions using patterns can offer real-world value.