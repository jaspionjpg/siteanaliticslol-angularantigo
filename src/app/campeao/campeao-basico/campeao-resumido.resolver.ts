import { CampeaoService } from './../../shared/services/campeao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { CampeaoResumido } from './../../shared/models/campeao-resumido';

@Injectable()
export class CampeaoResumidoResolver implements Resolve<CampeaoResumido> {

    constructor(private campeaoService: CampeaoService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
        
        let id = route.params['id'];   
        return this.campeaoService.getCampeaoResumido(id);
    }
}