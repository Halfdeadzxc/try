'use strict';

// Регистрируем команду
exports.commands = {
    "generateUseCase": {
        "title": "Generate Use Case Diagram",
        "shortcut": "Ctrl+Alt+U",
        "description": "Create a complete Use Case diagram automatically",
        "execute": function() {
            generateUseCaseDiagram();
        }
    }
};

function generateUseCaseDiagram() {
    try {
        // Создаем новую модель
        var project = app.project;
        var model = project.createModel();
        model.name = "Use Case Model";
        
        // Создаем пакет
        var pkg = model.createPackage();
        pkg.name = "Use Case Package";
        
        // Создаем акторов
        var customer = pkg.createActor();
        customer.name = "Customer";
        
        var admin = pkg.createActor();
        admin.name = "Administrator";
        
        // Создаем Use Cases
        var loginUC = pkg.createUseCase();
        loginUC.name = "Login";
        
        var registerUC = pkg.createUseCase();
        registerUC.name = "Register";
        
        var browseUC = pkg.createUseCase();
        browseUC.name = "Browse Products";
        
        // Создаем связи
        customer.createAssociation(loginUC);
        customer.createAssociation(registerUC);
        customer.createAssociation(browseUC);
        
        admin.createAssociation(loginUC);
        
        // Создаем диаграмму
        var diagram = pkg.createUseCaseDiagram();
        diagram.name = "Use Case Diagram";
        
        // Добавляем все элементы на диаграмму
        diagram.addAllViews();
        
        // Авто-расположение
        diagram.autoLayout();
        
        // Сообщение об успехе
        app.dialogs.showInfoDialog("Success", "Use Case diagram has been generated successfully!");
        
    } catch (error) {
        app.dialogs.showErrorDialog("Error", error.toString());
    }
}
