import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { HomeService } from 'src/app/home/home.service';
import { RecAddress } from 'src/app/interfaces/address.model';
import { RecClient } from 'src/app/interfaces/company.model';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-atualization',
  templateUrl: './address-atualization.component.html',
  styleUrls: ['./address-atualization.component.css']
})
export class AddressAtualizationComponent implements OnInit {

  id = localStorage.getItem('address')
  client:RecClient = {} as RecClient
  form!:FormGroup

  constructor(
    private service: AddressService,
    private homeService: HomeService,
    private companyService: CompanyService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {

    this.getAddress();
    this.getClient();
    this.createForm();

  }

  getAddress(){
    this.service.getAddressById(this.id!)
      .subscribe(res => {
        this.form.controls['zipCode'].setValue(res.zipCode)
        this.form.controls['branch'].setValue(res.branch)
        this.form.controls['cnpj'].setValue(res.cnpj)
        this.form.controls['state'].setValue(res.state)
        this.form.controls['city'].setValue(res.city)
        this.form.controls['neighborhood'].setValue(res.neighborhood)
        this.form.controls['address'].setValue(res.address)
        this.form.controls['number'].setValue(res.number)
        this.form.controls['complement'].setValue(res.complement)
      })
  }

  getClient(){
    this.homeService.findById(this.homeService.getUserId)
      .subscribe(user => {
        this.companyService.getCompanyById(user.clientId)
          .subscribe(client => this.client = client)
      })
  }

  createForm(){
    this.form = this.fb.group({
      branch: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      cnpj: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      number: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    })
  }

  getAddressInfo(cep:string){
    this.service.getAddressInfo(cep)
      .subscribe(res => {
        res.uf = this.getStatesNamesByInitials(res.uf)

        this.form.controls['state'].setValue(res.uf)
        this.form.controls['city'].setValue(res.localidade)
        this.form.controls['neighborhood'].setValue(res.bairro)
        this.form.controls['address'].setValue(res.logradouro)
      })
  }

  getStatesNamesByInitials(sigla:string){
    return this.service.getStatesNamesByInitials(sigla);
  }

  editAddress(form:FormGroup){
    let client = {id:this.client.id}
    let branch = form.value.branch
    let address = form.value.address
    let city = form.value.city
    let cnpj = form.value.cnpj
    let complement = form.value.complement
    let neighborhood = form.value.neighborhood
    let number = form.value.number
    let state = form.value.state
    let zipCode = form.value.zipCode

    this.service.edit(this.id!, {client, branch, address, city, cnpj, complement, neighborhood, number, state, zipCode})
      .subscribe(res => {
        if(res){
          this.toast.success('Endere??o editado com sucesso!')
          this.route.navigate(['address'])
        } else {
          this.toast.error('Houve um erro ao tentar editar o endere??o.')
        }
      })
  }

}
