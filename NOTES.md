# Type validation when fetching from server

EVERY fetch request should be made through the server, including third parties which will be proxied. We need a type validation "source of all truth" to manage separate repositories.

To do this, we should act similarly as we do in the server repo, instead treating the server like the data level. This means the '#fetch' will be our source of all truth for external (server) types. The fetch folder structure must directly mirror the route structure, with types and validators declared in the same file.

This will be the base level, and everything will build off of it.

Commonly used server types like "User" may come through many times in many responses, so these will be declared in the "#models" folder for now, and may be restructured in the future.