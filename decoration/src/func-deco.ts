function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`메서드 ${propertyKey} 호출됨. 인자:`, args);
    return original.apply(this, args);
  };
}

class MyService {
  @LogMethod
  greet(name: string) {
    return `Hello, ${name}`;
  }
}

let ms = new MyService();
ms.greet("World");  
