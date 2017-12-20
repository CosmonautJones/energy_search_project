
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plans').del()
    .then(function () {
      // Inserts seed entries
      return knex('plans').insert([
{ id: 1, company: 'Windler-Gutmann', 500: 0.02, 1000: 0.15, 2000: 0.22, state: 'CA', zip_code: '90081', contract: true, rating: 4 },
{ id: 2, company: 'Streich Group', 500: 0.1, 1000: 0.18, 2000: 0.23, state: 'WI', zip_code: '53705', contract: false, rating: 6 },
{ id: 3, company: 'Ratke LLC', 500: 0.07, 1000: 0.15, 2000: 0.25, state: 'TX', zip_code: '75310', contract: false, rating: 9 },
{ id: 4, company: 'Parker, Ledner and Cremin', 500: 0.03, 1000: 0.14, 2000: 0.32, state: 'TX', zip_code: '75185', contract: true, rating: 9 },
{ id: 5, company: 'Sauer LLC', 500: 0.1, 1000: 0.12, 2000: 0.35, state: 'NM', zip_code: '87190', contract: true, rating: 8 },
{ id: 6, company: 'Bernhard Inc', 500: 0.05, 1000: 0.18, 2000: 0.27, state: 'LA', zip_code: '70174', contract: true, rating: 4 },
{ id: 7, company: 'Fisher Group', 500: 0.09, 1000: 0.18, 2000: 0.44, state: 'CA', zip_code: '95155', contract: false, rating: 5 },
{ id: 8, company: 'Hintz-Dicki', 500: 0.04, 1000: 0.13, 2000: 0.25, state: 'TX', zip_code: '79968', contract: true, rating: 4 },
{ id: 9, company: 'Abbott, Jones and Dickinson', 500: 0.06, 1000: 0.2, 2000: 0.42, state: 'LA', zip_code: '70836', contract: false, rating: 3 },
{ id: 10, company: 'Bode-Breitenberg', 500: 0.01, 1000: 0.11, 2000: 0.4, state: 'CA', zip_code: '92844', contract: true, rating: 9 },
{ id: 11, company: 'Reinger LLC', 500: 0.0, 1000: 0.21, 2000: 0.45, state: 'CA', zip_code: '92662', contract: false, rating: 5 },
{ id: 12, company: 'Robel-Hagenes', 500: 0.07, 1000: 0.15, 2000: 0.23, state: 'CA', zip_code: '94245', contract: false, rating: 9 },
{ id: 13, company: 'Gibson, Zulauf and McGlynn', 500: 0.06, 1000: 0.16, 2000: 0.4, state: 'TX', zip_code: '75705', contract: true, rating: 9 },
{ id: 14, company: 'Lehner LLC', 500: 0.06, 1000: 0.2, 2000: 0.27, state: 'TX', zip_code: '78240', contract: false, rating: 7 },
{ id: 15, company: 'Haag-Monahan', 500: 0.05, 1000: 0.15, 2000: 0.39, state: 'TX', zip_code: '79916', contract: false, rating: 1 },
{ id: 16, company: 'Gutkowski and Thompson', 500: 0.09, 1000: 0.21, 2000: 0.4, state: 'CA', zip_code: '93762', contract: false, rating: 2 },
{ id: 17, company: 'Ortiz-Mohr', 500: 0.07, 1000: 0.19, 2000: 0.28, state: 'TX', zip_code: '77218', contract: false, rating: 6 },
{ id: 18, company: 'Mraz LLC', 500: 0.04, 1000: 0.18, 2000: 0.36, state: 'CA', zip_code: '91131', contract: false, rating: 8 },
{ id: 19, company: 'Kutch Group', 500: 0.06, 1000: 0.17, 2000: 0.29, state: 'CA', zip_code: '92717', contract: false, rating: 4 },
{ id: 20, company: 'Koepp-Crona', 500: 0.09, 1000: 0.18, 2000: 0.24, state: 'NM', zip_code: '87195', contract: true, rating: 8 },
{ id: 21, company: 'Wilkinsonstr-Hilpert', 500: 0.04, 1000: 0.11, 2000: 0.46, state: 'TX', zip_code: '76129', contract: true, rating: 10 },
{ id: 22, company: 'Heathcote Group', 500: 0.06, 1000: 0.17, 2000: 0.28, state: 'TX', zip_code: '75392', contract: true, rating: 10 },
{ id: 23, company: 'Streich LLC', 500: 0.06, 1000: 0.13, 2000: 0.22, state: 'TX', zip_code: '78744', contract: true, rating: 3 },
{ id: 24, company: 'Kreiger-Mraz', 500: 0.03, 1000: 0.18, 2000: 0.36, state: 'CA', zip_code: '92862', contract: true, rating: 6 },
{ id: 25, company: 'Schneider-Graham', 500: 0.06, 1000: 0.13, 2000: 0.47, state: 'TX', zip_code: '79710', contract: true, rating: 3 },
{ id: 26, company: 'Cassin, Hegmann and Rau', 500: 0.07, 1000: 0.19, 2000: 0.33, state: 'TX', zip_code: '75507', contract: true, rating: 10 , },
{ id: 27, company: 'Stokes-Skiles', 500: 0.03, 1000: 0.18, 2000: 0.33, state: 'TX', zip_code: '78470', contract: false, rating: 6 },
{ id: 28, company: 'Hartmann-Ondricka', 500: 0.07, 1000: 0.18, 2000: 0.4, state: 'TX', zip_code: '75062', contract: true, rating: 2 },
{ id: 29, company: 'Crona-Stanton', 500: 0.07, 1000: 0.17, 2000: 0.26, state: 'TX', zip_code: '78215', contract: false, rating: 10 },
{ id: 30, company: 'Beatty, Kerluke and Schmidt', 500: 0.01, 1000: 0.14, 2000: 0.4, state: 'CA', zip_code: '95155', contract: false, rating: 8 },
{ id: 31, company:  'Hilpert, Konopelski and Rice', 500: 0.05, 1000: 0.14, 2000: 0.22, state: 'TX', zip_code: '77050', contract: false, rating: 2 },
{ id: 32, company: 'Gutkowski-Quitzon', 500: 0.0, 1000: 0.18, 2000: 0.26, state: 'TX', zip_code: '88541', contract: true, rating: 3 },
{ id: 33, company: 'Aufderhar, Fadel and Bartell', 500: 0.01, 1000: 0.2, 2000: 0.49, state: 'NM', zip_code: '87190', contract: false, rating: 8 },
{ id: 34, company: 'Dach, King and Pouros', 500: 0.08, 1000: 0.15, 2000: 0.22, state: 'TX', zip_code: '79950', contract: true, rating: 2 },
{ id: 35, company: 'White and Sons', 500: 0.08, 1000: 0.14, 2000: 0.36, state: 'TX', zip_code: '78240', contract: false, rating: 2 },
{ id: 36, company: 'Schimmel-Treutel', 500: 0.05, 1000: 0.19, 2000: 0.25, state: 'CA', zip_code: '93111', contract: false, rating: 1 },
{ id: 37, company: 'McDermott-Maggio', 500: 0.02, 1000: 0.12, 2000: 0.47, state: 'TX', zip_code: '77305', contract: false, rating: 4 },
{ id: 38, company: 'Mann, Williamson and Mertz', 500: 0.02, 1000: 0.19, 2000: 0.49, state: 'LA', zip_code: '70894', contract: false, rating: 7 },
{ id: 39, company: 'Fritsch, Hand and Nienow', 500: 0.01, 1000: 0.17, 2000: 0.47, state: 'CA', zip_code: '94544', contract: false, rating: 8 },
{ id: 40, company: 'Kuhlman, Rosenbaum and Torp', 500: 0.0, 1000: 0.15, 2000: 0.42, state: 'WI', zip_code: '53234', contract: false, rating: 6 },
{ id: 41, company: 'Willms, Waelchi and Runte', 500: 0.01, 1000: 0.16, 2000: 0.37, state: 'CA', zip_code: '94263', contract: false, rating: 6 },
{ id: 42, company: 'Collins Inc', 500: 0.02, 1000: 0.19, 2000: 0.26, state: 'CA', zip_code: '92196', contract: false, rating: 2 , },
      ]);
    });
};