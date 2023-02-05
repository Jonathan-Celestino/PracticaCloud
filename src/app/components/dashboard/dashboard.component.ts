import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Calculo } from '../../models/calculo';
import { InversionService } from '../../services/inversion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faQrcode = faQrcode;
  closeModal!: string;
  public formGroup: FormGroup;
  listaCalculo: Calculo[];
  montoFinal: number = 0;
  ganancia = 0;

  constructor(private fb: FormBuilder, private inversionService: InversionService) {
    this.formGroup = this.fb.group({
      inversionInicial:[, [Validators.required, Validators.min(1000)]],
      aportacionAnual: [0, Validators.min(0)],
      incrementoAnual: [0, Validators.min(0)],
      anosInversion: [, [Validators.required, Validators.min(1)]],
      rendimiento: [, [Validators.required, Validators.min(1)]],
    });
    this.listaCalculo = [];
  }

  ngOnInit(): void {
    let counter = 1;
      if (counter == 5) {
        counter = 0;
      }

      counter++;
    }

    calcular(): void {
      if (this.formGroup.valid) {
        this.inversionService.iniciarCalculo(this.formGroup.getRawValue()).subscribe( result => {
          if (result != null) {
            this.listaCalculo = result;
            this.montoFinal = result[result.length-1].saldoFinal;
            this.ganancia = this.obtenerGanancia(result, this.montoFinal);
          }
        });
      } else {
        alert("No es posible procesar su solicitud con los datos proporcionados");
      }
    }

    obtenerGanancia(valores: Calculo[], montoFinal: number): number {
      const montoInicial = valores[0].saldoInicial;
      let aporaciones = 0;
      valores.forEach(element => {
        aporaciones += element.aportacion;
      })
      return montoFinal - (montoInicial + aporaciones);
    }

}
