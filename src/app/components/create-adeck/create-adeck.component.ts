import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormArray,FormBuilder } from "@angular/forms";
import { PasswordValidator } from 'src/app/services/password.validators';
import { RegistrationService } from 'src/app/services/registration.service';
import { ForbiddenNameValidator } from 'src/app/services/user-name.validator';

@Component({
  selector: 'app-create-adeck',
  templateUrl: './create-adeck.component.html',
  styleUrls: ['./create-adeck.component.css'],
})
export class CreateADeckComponent implements OnInit {
  title = 'Angular-Forms-Test-3-Reactive-Forms';
  constructor(
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService
  ) {}

  registrationForm!: FormGroup;

  ngOnInit(): void {
    this.registrationForm = this._formBuilder.group(
      {
        deckName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            ForbiddenNameValidator(/password/),
          ],
        ],
        questions:[''],
        answers:[''],
        thumbnailLink:['',[Validators.required, Validators.minLength(4)]],
        genre: this._formBuilder.group({
          entertainment:['Entertainment'],
          science:['Science'],
          generalKnowledge:['GeneralKnowledge']
        }),
        otherQuestions: this._formBuilder.array([]),
        otherAnswers: this._formBuilder.array([])
      },
      { validator: PasswordValidator }
    );
  }

  get deckName() {
    return this.registrationForm.get('deckName');
  }

  get thumbnailLink() {
    return this.registrationForm.get('thumbnailLink');
  }

  get otherQuestions() {
    return this.registrationForm.get('otherQuestions') as FormArray 
  }

  get otherAnswers(){
    return this.registrationForm.get('otherAnswers') as FormArray;
  }

  get questions(){
    return this.registrationForm.get('questions');
  }

  get answers(){
    return this.registrationForm.get('answers');
  }

  addOtherQuestions() {
    this.otherQuestions.push(this._formBuilder.control(''));
  }

  addOtherAnswer(){
    this.otherAnswers.push(this._formBuilder.control(''));
  }
 

  loadApi() {
    this.registrationForm.patchValue({
      deckName: 'test',
      thumbnailLink: 'https://c.tenor.com/vrD-xBX3LsIAAAAM/shitpost-meme.gif',
      answers:['mix'],
      questions:['meow'],
      otherQuestions: (['please']),
      otherAnswers:(['deliver'])

      
    });
  }

  onSubmit() {
    // console.log(this.registrationForm.value);

    this._registrationService.register(this.registrationForm.value).subscribe(
      (Response) => console.log('Success'),
      (error) => console.error('Error')
    );
  }
}
