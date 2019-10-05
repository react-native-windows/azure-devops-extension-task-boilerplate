# Azure DevOps Extension Tasks Boilerplate

A boilerplate project help you to author azure pipeline tasks. It includes:
1. A 'Hello World' task
2. tslint and typescript support
3. compile, and package the extension

When I started a project to creating an [Azure pipeline build task](https://github.com/react-native-windows/WinAppDriverInstaller) to install any version of WinAppDriver to the agent, I follow [create a custom pipeline task](https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?toc=%2Fazure%2Fdevops%2Fextend%2Ftoc.json&bc=%2Fazure%2Fdevops%2Fextend%2Fbreadcrumb%2Ftoc.json&view=azure-devops). There is still some overhead to setup the project.
Finally I found a good example on [azure-devops-extension-tasks](https://github.com/Microsoft/azure-devops-extension-tasks), which allows to build and package multiple tasks to the same extension.
Based on that, I create this boilerplate

## Contribute

1. From the root of the repo run `npm run initdev`. This will pull down the necessary modules and TypeScript declare files.
2. Run `npm run build` to compile the build tasks.
3. Run `npm run package` to create a .vsix extension package that includes the build tasks.
