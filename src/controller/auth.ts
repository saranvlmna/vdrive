import { StatusCodes } from "http-status-codes";
import { AuthService } from "../service/auth";
const authService = new AuthService();
export class AuthController {
  constructor() {}

  async signUp(req: any, res: any) {
    try {
      const response = await authService.signUp();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(req: any, res: any) {
    try {
      const response = await authService.signIn();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
