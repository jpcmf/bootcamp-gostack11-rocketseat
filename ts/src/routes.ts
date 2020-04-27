import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces

export function helloW(req: Request, res: Response) {
  const users = CreateUser({
    email: 'jpfricks@email.com',
    password: '123456',
    techs: [
      'ReactJS, React Native, Node.js',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  console.log(users.email);

  return res.json({ message: 'Hellow' });
}
