import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightSearchComponent } from './flight-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchComponent],
      imports: [HttpClientModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  // it('should get min. one Result',()=>{
  //   // component.from = "Hamburg";
  //   // component.to = "Graz";
  //   component.search();
    
  //   expect(component.flights.length) .toBeGreaterThan(0)
  // });
});
