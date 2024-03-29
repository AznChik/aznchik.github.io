import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicComponent } from './music.component';
import { emptyCart, fullCart } from './common/data/carts';
import { emptyStock, fullStock } from './common/data/stocks';
import { MusicService } from './common/services/music.service';

describe('MusicComponent', () => {
  let app: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicComponent]
    });
    fixture = TestBed.createComponent(MusicComponent);
    app = fixture.componentInstance;
  });

  it('should create app', () => {
    expect(app).toBeTruthy();
  });

  describe('ngOninit()', () => {
    it('should empty cart & fill stock then set isLoading to false', () => {
      MusicService.cart = fullCart;
      MusicService.stock = emptyStock;
      app.isLoading = true;

      jasmine.clock().install();
      app.ngOnInit();
      jasmine.clock().tick(3000);

      expect(MusicService.cart).toEqual(emptyCart);
      expect(MusicService.stock).toEqual(fullStock);
      expect(app.isLoading).toBe(false);
    });
  });
});
