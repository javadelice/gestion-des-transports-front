import { OnInit, Component } from '@angular/core';
import { AnnonceCovoitService } from 'src/app/services/annonce.covoit.service';
import { AnnonceCovoitList } from 'src/app/models/AnnonceCovoitList';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  constructor(private annonceService:AnnonceCovoitService) { }

  annoncesEnCours: AnnonceCovoitList[];
  ancienneAnnonces: AnnonceCovoitList [];

  ngOnInit() {
    this.annonceService.afficherAnnoncesEnCours().subscribe(annoncesEnCours =>
      { this.annoncesEnCours = annoncesEnCours;});

    this.annonceService.afficherAnciennesAnnonces().subscribe(ancienneAnnonces =>
      {this.ancienneAnnonces = ancienneAnnonces;});
  }

}
