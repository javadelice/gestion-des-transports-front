import {Component, OnInit} from '@angular/core';
import {CovoitResaService} from './covoit-resa.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ResaCovoit } from 'src/app/models/ResaCovoit';


@Component({
  selector: 'app-covoit-resa',
  templateUrl: './covoit-resa.component.html',
  styleUrls: ['./covoit-resa.component.css']
})
export class CovoitResaComponent implements OnInit  {

  resas: ResaCovoit[];
  private _resasHisto: ResaCovoit[] = Array();
  headElements = ['Date / heure', 'Départ', 'Destination', 'Statut', ''];
  headElementsHisto = ['Date / heure', 'Départ', 'Destination', 'Statut', ''];

  page = 1;
  pageSize = 5;
  collectionSize;

  get resasHisto(): ResaCovoit[] {
    return this._resasHisto
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor(private srv: CovoitResaService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.srv.getReservations().subscribe(resasCovoit => {
      this.resas = resasCovoit;

    });
    this.srv.getOldReservations().subscribe(resasCovoit => {
      this._resasHisto = resasCovoit;
      this.collectionSize = resasCovoit.length;
    });
  }


  openModal(modal) {
    // this.error = undefined;
    this.modalService.open(modal);
  }

cancelBooking(resa: ResaCovoit) {
this.srv.annulerResaCovoit(resa).subscribe(
  success => {
    // en cas de succes,fermeture de la fenetre modale
    this.modalService.dismissAll();
    this.ngOnInit();
  },
  err => {

  }
)
}


}
