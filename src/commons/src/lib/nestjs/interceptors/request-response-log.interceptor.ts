import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class RequestResponseLogInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        const now = Date.now();
        const request = context.switchToHttp().getRequest();
        const method = request.method;
        const url = request.originalUrl;
        console.warn(`REQUEST [${method}] ${url}`)
        return handler
            .handle()
            .pipe(
                map((data) => {
                    const response = context.switchToHttp().getResponse();
                    const delay = Date.now() - now;
                    console.warn(`RESPONSE [${response.statusCode}] [${method}] ${url} - ${delay}ms`)
                    return { data }
                }),
                catchError((error) => {
                    const response = context.switchToHttp().getResponse();
                    const delay = Date.now() - now;
                    console.error(`REQUEST [${error.response?.statusCode ?? response.statusCode}] [${method}] ${url} - ${delay}ms`)
                    return throwError(error);
                }),
            );
    }
}
