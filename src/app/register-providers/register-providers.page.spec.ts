import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterProvidersPage } from './register-providers.page';

describe('RegisterProvidersPage', () => {
  let component: RegisterProvidersPage;
  let fixture: ComponentFixture<RegisterProvidersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProvidersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterProvidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
