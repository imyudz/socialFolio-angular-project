import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { __values } from 'tslib';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  registerForm: FormGroup;
  selectedProfileImg = "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
  selectedCoverImg = "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  selectedProfileFile: File | null = null;
  selectedCoverFile: File | null = null;
  REQUIRED_LENGTH_DESC: number = 70;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      nomeSocial: [''],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      telefone: ['', [Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/), Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmeSenha: ['', [Validators.required, Validators.minLength(6), this.verificarSenhas()]],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.maxLength(this.REQUIRED_LENGTH_DESC)]],
      coverImg: [''],
      profileImg: [''],
      profissao: ['', Validators.required],
      empresa: [''],
      localEmpresa: [''],
      educacao: ['', Validators.required],
      empregado: [false],
    });
    this.setDefaultFiles();
  }

  private setDefaultFiles(): void {
    // Replace 'path_to_your_image' com o caminho para a sua imagem local
    this.getFileFromPath('../../../assets/default-profile-img.jpg', 'profile_image.jpg')
      .then(file => {
        this.selectedProfileFile = file;
      });

    // Replace 'path_to_your_image' com o caminho para a sua imagem local
    this.getFileFromPath('../../../assets/default-cover-img.jpg', 'cover_image.jpg')
      .then(file => {
        this.selectedCoverFile = file;
      });
  }

  private async getFileFromPath(filePath: string, fileName: string): Promise<File> {
    const response = await fetch(filePath);
    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
  }


  loadProfileImage(event: Event): void | { notAllowedType: boolean } {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedProfileFile = <File> file;
      console.log("file: ", file);
      if(file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event: any) => {
          this.selectedProfileImg = event.target.result;
          console.log("event: ", event.target);
        };
      } else {
        return { notAllowedType: true }
      }
    }
  }

  loadCoverImg(event: Event): void | { notAllowedType: boolean } {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedCoverFile = <File> file;
      console.log("file: ", file);
      if(file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event: any) => {
          this.selectedCoverImg = event.target.result;
          console.log("event: ", event.target);
        };
      } else {
        return { notAllowedType: true }
      }
    }
  }


  applyPhoneMask(event: any, form: FormGroup): void {
    const phone = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const phoneMask = /(\d{2})(\d{4,5})(\d{4})/;
    const phoneControl = form.get("telefone");
    if (!phoneControl) {
      return;
    } else {
      if (phone.length <= 2) {
        phoneControl.setValue(phone);
      } else if (phone.length <= 7) {
        phoneControl.setValue(phone.replace(phoneMask, '($1) $2'));
      } else {
        phoneControl.setValue(phone.replace(phoneMask, '($1) $2-$3'));
      }
    }
  }

  verificarSenhas(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const senha = control.root.get("senha");
      const confirmeSenha = control;
      // console.log("senha:", senha?.value);
      // console.log("confirmeSenha: ", confirmeSenha.value);
      if (senha !== null && confirmeSenha !== null && senha.value !== confirmeSenha.value) {
        return { senhasDiferentes: true };
      }
      return null;
    };
  };

  onSubmit() {
    const dadosFormulario = new FormData();
      dadosFormulario.append("firstName", this.registerForm.get("nome")?.value);
      dadosFormulario.append("lastName", this.registerForm.get("sobrenome")?.value);
      dadosFormulario.append("socialName", this.registerForm.get("nomeSocial")?.value);
      dadosFormulario.append("email", this.registerForm.get("email")?.value);
      dadosFormulario.append("password", this.registerForm.get("confirmeSenha")?.value);
      dadosFormulario.append("dtNasc", this.registerForm.get("dataNascimento")?.value);
      dadosFormulario.append("phone", this.registerForm.get("telefone")?.value);
      if (this.selectedCoverFile){
        dadosFormulario.append("avatar", this.selectedCoverFile, this.selectedCoverFile?.name);
      }
      dadosFormulario.append("description", this.registerForm.get("descricao")?.value);
      dadosFormulario.append("state", this.registerForm.get("estado")?.value);
      dadosFormulario.append("city", this.registerForm.get("cidade")?.value);
      if (this.selectedProfileFile) {
        dadosFormulario.append("coverImg", this.selectedProfileFile, this.selectedProfileFile?.name);
      }
      dadosFormulario.append("employee", this.registerForm.get("empregado")?.value);
      dadosFormulario.append("workplace", this.registerForm.get("localEmpresa")?.value);
      dadosFormulario.append("recent_Education", this.registerForm.get("educacao")?.value);
      dadosFormulario.append("current_Company", this.registerForm.get("empresa")?.value);

    this.authService.register(dadosFormulario).subscribe(
      response =>{
        if (response.token){
          Swal.fire({
            text: "Usuário criado com sucesso!",
            title: "Sucesso!",
            icon: "success",
          })
          return this.router.navigate(['/login']);
        } else return;
      }, error => {
        Swal.fire({
          text: error.error.message,
          title: "Algo de errado ocorreu" + error.status,
          icon: "error",
        });
      }
    );

    console.log(dadosFormulario.forEach(__values => console.log(__values)));
  }

}
