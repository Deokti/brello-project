import { createEffect } from "effector";

export const apiPostAuthFx = createEffect(async () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10) > 5;

    if (random) reject({ status: 500, 
      error: JSON.stringify("На сервере произошла ошибка. Повторите попытку позднее")  
    });
    
    resolve({ status: 200 });
  })
})