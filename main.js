// main.js
exports.generateUseCase = function() {
    // Получаем или создаем модель
    var model = app.modelManager.getSelectedModel();
    if (!model) {
        model = app.modelManager.createModel('UseCaseModel');
    }
    
    // Создаем пакет для Use Cases
    var package = model.createPackage('UseCase Package');
    
    // Создаем акторов
    var customer = package.createActor('Customer');
    var admin = package.createActor('Administrator');
    var system = package.createActor('System');
    
    // Создаем Use Cases
    var login = package.createUseCase('Login');
    var register = package.createUseCase('Register');
    var browse = package.createUseCase('Browse Products');
    var purchase = package.createUseCase('Purchase Product');
    var manage = package.createUseCase('Manage Inventory');
    
    // Создаем связи между акторами и Use Cases
    customer.createAssociation(login);
    customer.createAssociation(register);
    customer.createAssociation(browse);
    customer.createAssociation(purchase);
    
    admin.createAssociation(login);
    admin.createAssociation(manage);
    
    system.createAssociation(login);
    
    // Создаем отношения Include/Extend
    var includeRel = purchase.createInclude(browse);
    var extendRel = login.createExtend(register);
    
    // Создаем диаграмму
    var diagram = package.createUseCaseDiagram('Use Case Diagram');
    
    // Добавляем все элементы на диаграмму
    diagram.addAllViews();
    
    // Автоматическое расположение
    diagram.autoLayout();
    
    // Показываем сообщение
    app.dialogs.showInfoDialog('Success', 'Use Case diagram generated successfully!');
}
