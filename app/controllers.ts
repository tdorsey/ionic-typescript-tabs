/// <reference path="../typings/index.d.ts" />
/// <reference path="./services.ts" />

class DashCtrl {
  constructor() { }
}

class WeightsCtrl {
  public $inject = ['Weights'];
  weights: any[];
  constructor(
    public Weights: Services.IWeightsService
  ) {
    this.weights = Weights.all();
  }
  remove(weight) {
    this.Weights.remove(weight);
  };
}

class ExercisesCtrl {
  public $inject = ['Exercises'];
  exercises: Array<Services.IExerciseService>;
  constructor(
    public Exercises: Services.Exercise
  ) {
    this.exercises = Exercises.all();
  }
  remove(exercise) {
    this.Exercises.remove(exercise);
  };
}

interface IStateParams extends ng.ui.IStateParamsService {
  weightId: string;
}

class WeightDetailCtrl {
  public $inject = ['Weights', '$stateParams'];
  weight: Object;
  constructor(
    public Weights: Services.IWeightsService,
    public $stateParams: IStateParams
  ) {
    this.weight = Weights.get($stateParams.weightId);
  }
}

class SettingsCtrl {
  settings: Object;
  constructor(public Settings: Services.IUserSettings) {
    this.settings = Settings;
  }
}

angular.module('starter.controllers', [])
  .controller('DashCtrl', DashCtrl)
  .controller('WeightsCtrl', WeightsCtrl)
  .controller('WeightDetailCtrl', WeightDetailCtrl)
    .controller('ExercisesCtrl', ExercisesCtrl)
  .controller('SettingsCtrl', SettingsCtrl);
