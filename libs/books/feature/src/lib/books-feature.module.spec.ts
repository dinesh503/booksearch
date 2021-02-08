import { waitForAsync, TestBed } from '@angular/core/testing';
import { BooksFeatureModule } from './books-feature.module';

describe('ShopFeatureModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BooksFeatureModule).toBeDefined();
  });
});
