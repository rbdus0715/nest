function Logger(constructor: Function) {
  console.log(`클래스 ${constructor.name}이 생성되었습니다.`);
}

@Logger
class MyClass {}
