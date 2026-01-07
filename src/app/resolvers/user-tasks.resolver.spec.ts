import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userTasksResolver } from './user-tasks.resolver';

describe('userTasksResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userTasksResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
