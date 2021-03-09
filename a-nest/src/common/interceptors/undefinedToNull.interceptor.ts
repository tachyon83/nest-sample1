import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable()
export class undefinedToNullInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>
    ): Observable<any> | Promise<Observable<any>> {
        // throw new Error('Method not implemented.');
        // before going into controller
        return next
            .handle()
            .pipe(
                map(data => data === undefined ? null : data)
            )
    }

}