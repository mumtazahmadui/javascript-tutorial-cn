Anti-Patterns

If we consider that a pattern represents a best practice, an anti-pattern represents a lesson that has been learned. The term anti-patterns was coined in 1995 by Andrew Koenig in the November C++ Report that year, inspired by the GoF's book Design Patterns. In Koenig’s report, there are two notions of anti-patterns that are presented. Anti-Patterns:

Describe a bad solution to a particular problem which resulted in a bad situation occurring
Describe how to get out of said situation and how to go from there to a good solution

While it’s quite important to be aware of design patterns, it can be equally important to understand anti-patterns. Let us qualify the reason behind this. When creating an application, a project’s life-cycle begins with construction however once you’ve got the initial release done, it needs to be maintained. The quality of a final solution will either be good or bad, depending on the level of skill and time the team have invested in it. Here good and bad are considered in context - a ‘perfect’ design may qualify as an anti-pattern if applied in the wrong context.

To summarize, an anti-pattern is a bad design that is worthy of documenting. Examples of anti-patterns in JavaScript are the following:

Polluting the global namespace by defining a large number of variables in the global context

Passing strings rather than functions to either setTimeout or setInterval as this triggers the use of eval() internally.

Modifying the Object class prototype (this is a particularly bad anti-pattern)

Using JavaScript in an inline form as this is inflexible

The use of document.write where native DOM alternatives such as document.createElement are more appropriate. document.write has been grossly misused over the years and has quite a few disadvantages including that if it's executed after the page has been loaded it can actually overwrite the page we're on, whilst document.createElement does not. We can see here for a live example of this in action. It also doesn't work with XHTML which is another reason opting for more DOM-friendly methods such as document.createElement is favorable.

Knowledge of anti-patterns is critical for success. Once we are able to recognize such anti-patterns, we're able to refactor our code to negate them so that the overall quality of our solutions improves instantly.