import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecAddress } from 'src/app/interfaces/address.model';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-removal',
  templateUrl: './address-removal.component.html',
  styleUrls: ['./address-removal.component.css']
})
export class AddressRemovalComponent implements OnInit {

  id = localStorage.getItem('address');
  address:RecAddress = {} as RecAddress

  constructor(
    private service: AddressService,
    private toast: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {

    this.getAddress();

  }

  getAddress(){
    this.service.getAddressById(this.id!)
      .subscribe(res => this.address = res)
  }

  deleteAddress(){
    this.service.delete(this.id!)
      .subscribe(res => {
        if(res){
          this.toast.success('Endereço removido com sucesso!')
          this.route.navigate(['/address']);
        } else {
          this.toast.error('Erro ao tentar remover endereço')
        }
      })
  }

}
