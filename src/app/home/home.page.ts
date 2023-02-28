import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  mensagem:string='';

  constructor(
    public toastController: ToastController, //são objetos //class letra MAISUCULA //objeto n pode ter msm nome class
    public alertController: AlertController
  ) {}

  verificarRadio() { //ta chamando p executar as ações

    if (this.radioSelecionada=== 'option 1'){
          this.mensagem='Você escolheu a opção 1';
    }else{
      if(this.radioSelecionada=== 'option 2'){
          this.mensagem='Você escolheu a opção 2';
    }
    else{
      this.mensagem='Você escolheu a opção 3';
    }
  }

    this.exibirToast(); //eai chama o método
    this.exibirAlerta();
  }

  //fazer eles aparecerem - precisa ser metodo assíncrono be like aula teams na escola (msm tempo)
  //por ex: exibição de msg n precisa esperar td acontecer sincronamente, ta conectando wifi e ja entra no joguinho, ai recebe aquela msg "ta conectado" ent o toast (msgzinha) aparece ali do nada pq sim
  async exibirToast() {
    //criar uma constante q vai chamar o create
    const toast = await this.toastController.create({
      message: this.radioSelecionada, //como ta dentro do radio group ele vai assumir o valor de todos
      duration: 2000, //2 segundos
      color: "danger",
      position: "middle"
    });
    toast.present(); //dps de configurar manda ele aparecer
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.', //cabeçalho
      message: this.radioSelecionada, //msg caixinha
      buttons: ['OK'] //config botoes
    });
    alert.present();
  }

}
