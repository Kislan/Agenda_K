import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoQ1 } from './contatoQ1';

describe('ContatoQ1', () => {
  let component: ContatoQ1;
  let fixture: ComponentFixture<ContatoQ1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoQ1],
    }).compileComponents();

    fixture = TestBed.createComponent(ContatoQ1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
