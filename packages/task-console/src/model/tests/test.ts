describe('test', () => {
  test('json format', () => {
    const settings = {
      forms: {
        process1: {
          task1: 'url',
          task2: 'url2',
          task3: 'url2'
        },
        process2: {
          task1: 'url',
          task2: 'url2'
        },
        process3: {
          task1: 'url'
        }
      }
    };

    const registry = {
      map: new Map()
    };

    Object.entries(settings.forms).forEach(entry => {
      const formsMap = new Map(Object.entries(entry[1]));

      registry.map.set(entry[0], formsMap);
    });

    alert(registry);
  });
});
