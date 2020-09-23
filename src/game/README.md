This is the folder that holds the game logic and UI.

We want to separate logic and UI as much as we can,
so we want the UI to update itself when the logic tells it to,
and have the UI send updates to the logic when needed.

If we use an MVC model, `/logic` holds the model and the controller,
while `/ui` contains the view.