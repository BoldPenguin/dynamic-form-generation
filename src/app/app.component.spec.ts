import { TestBed, waitForAsync } from '@angular/core/testing';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [
          {
            provide: ApiService,
            useValue: { getQuestions: jest.fn(() => ({ subscribe: jest.fn })) },
          },
        ],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
