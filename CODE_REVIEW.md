

I see there are few code smells in the project. Here are few

1. Folder structure is not easily understandable. As per angular recommendations, child components should be inside parent components. Basically folders should be created as per the work flow of components rendered.

2. I see a folder name '+state' which is not as per standards. File names and folder names shouldn't start with special characters.

3. async should be replaced with waitForAsync in few spec files, as async is depricated in angular/test module.