import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule]  // standalone comp
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should show success message for correct credentials', () => {
    component.username = 'huzaifa';
    component.password = 'huzaifa1234';
    component.onLogin();

    expect(component.message).toContain('Login successful');
    expect(component.isError).toBeFalse();
  });

  it('should show error message for wrong credentials', () => {
    component.username = 'wrong';
    component.password = 'wrong';
    component.onLogin();

    expect(component.message).toContain('Invalid username or password');
    expect(component.isError).toBeTrue();
  });
});
