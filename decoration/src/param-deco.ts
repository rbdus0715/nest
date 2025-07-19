function LogParam(target: any, methodName: string, paramIndex: number) {
  console.log(`${methodName}의 ${paramIndex}번째 파라미터에 데코레이터 적용`);
}

class UserController {
  createUser(@LogParam name: string) {
    console.log(name);
  }
}

let object = new UserController();
object.createUser("gyuyeonjo");