import { SeedClient } from './client'

export default async (sc: SeedClient, max = Infinity) => {
  // @TODO when these are run in parallel, seem to get an intermittent
  // "TypeError: fetch failed" while running the tests.
  for (let i = 0; i < Math.min(max, users.length); ++i) {
    const { handle, displayName } = users[i]
    await sc.createAccount(handle, {
      handle: handle,
      password: 'password',
      email: `${handle}@bsky.app`,
    })
    if (displayName !== null) {
      await sc.createProfile(sc.dids[handle], displayName, '')
    }
  }
  return sc
}

const users = [
  { handle: 'silas77.test', displayName: 'Tanya Denesik' },
  { handle: 'nicolas-krajcik10.test', displayName: null },
  { handle: 'lennie-strosin.test', displayName: null },
  { handle: 'aliya-hodkiewicz.test', displayName: 'Carlton Abernathy IV' },
  { handle: 'jeffrey-sawayn87.test', displayName: 'Patrick Sawayn' },
  { handle: 'kaycee66.test', displayName: null },
  { handle: 'adrienne49.test', displayName: 'Kim Streich' },
  { handle: 'magnus53.test', displayName: 'Sally Funk' },
  { handle: 'charles-spencer.test', displayName: null },
  { handle: 'elta48.test', displayName: 'Dr. Lowell DuBuque' },
  { handle: 'tressa-senger.test', displayName: null },
  { handle: 'marietta-zboncak.test', displayName: null },
  { handle: 'alexander-hickle.test', displayName: 'Winifred Harber' },
  { handle: 'rodger-maggio24.test', displayName: 'Yolanda VonRueden' },
  { handle: 'janiya48.test', displayName: 'Miss Terrell Ziemann' },
  { handle: 'cayla-marquardt39.test', displayName: 'Rachel Kshlerin' },
  { handle: 'jonathan-green.test', displayName: 'Erica Mertz' },
  { handle: 'brycen-smith.test', displayName: null },
  { handle: 'leonel-koch43.test', displayName: 'Karl Bosco IV' },
  { handle: 'fidel-rath.test', displayName: null },
  { handle: 'raleigh-metz.test', displayName: null },
  { handle: 'kim41.test', displayName: null },
  { handle: 'roderick-dibbert.test', displayName: null },
  { handle: 'alec-bergnaum.test', displayName: 'Cody Berge' },
  { handle: 'sven70.test', displayName: null },
  { handle: 'ola-oconnell.test', displayName: null },
  { handle: 'chauncey-klein.test', displayName: 'Kelvin Klein' },
  { handle: 'ariel-krajcik.test', displayName: null },
  { handle: 'murphy35.test', displayName: 'Mrs. Clifford Mertz' },
  { handle: 'joshuah-parker11.test', displayName: null },
  { handle: 'dewitt-wunsch.test', displayName: null },
  { handle: 'kelton-nitzsche43.test', displayName: null },
  { handle: 'dock-mann91.test', displayName: 'Miss Danielle Weber' },
  { handle: 'herman-gleichner95.test', displayName: 'Kelli Schinner III' },
  { handle: 'gerda-marquardt.test', displayName: 'Myron Wolf' },
  { handle: 'jamil-batz.test', displayName: null },
  { handle: 'hilario84.test', displayName: null },
  { handle: 'kayli-bode.test', displayName: 'Miss Floyd McClure' },
  { handle: 'elouise28.test', displayName: 'Alberta Fay' },
  { handle: 'leann49.test', displayName: null },
  { handle: 'javon24.test', displayName: null },
  { handle: 'polly-shanahan45.test', displayName: null },
  { handle: 'rosamond38.test', displayName: 'Karl Goyette' },
  { handle: 'fredrick-mueller.test', displayName: null },
  { handle: 'reina-runte33.test', displayName: 'Pablo Schmidt' },
  { handle: 'bianka33.test', displayName: null },
  { handle: 'carlos6.test', displayName: null },
  { handle: 'jermain-smith.test', displayName: 'Eileen Stroman' },
  { handle: 'gina97.test', displayName: null },
  { handle: 'kiera97.test', displayName: null },
  { handle: 'savannah-botsford.test', displayName: 'Darnell Kuvalis' },
  { handle: 'lilliana-waters.test', displayName: null },
  { handle: 'hailey-stroman.test', displayName: 'Elsa Schaden' },
  { handle: 'dortha-terry.test', displayName: 'Nicole Bradtke' },
  { handle: 'hank-powlowski32.test', displayName: null },
  { handle: 'ervin-daugherty.test', displayName: null },
  { handle: 'nannie18.test', displayName: null },
  { handle: 'gilberto-watsica65.test', displayName: 'Ms. Ida Wilderman' },
  { handle: 'kara-zieme58.test', displayName: 'Andres Towne' },
  { handle: 'crystal-boyle.test', displayName: null },
  { handle: 'tobin63.test', displayName: 'Alex Johnson' },
  { handle: 'isai-kunze72.test', displayName: 'Marion Dickinson' },
  { handle: 'paris-swift.test', displayName: null },
  { handle: 'nestor90.test', displayName: 'Travis Hoppe' },
  { handle: 'aliyah-flatley12.test', displayName: 'Loren Krajcik' },
  { handle: 'maiya42.test', displayName: null },
  { handle: 'dovie33.test', displayName: null },
  { handle: 'kendra-ledner80.test', displayName: 'Sergio Hane' },
  { handle: 'greyson-tromp3.test', displayName: null },
  { handle: 'precious-fay.test', displayName: null },
  { handle: 'kiana-schmitt39.test', displayName: null },
  { handle: 'rhianna-stamm29.test', displayName: null },
  { handle: 'tiara-mohr.test', displayName: null },
  { handle: 'eleazar-balistreri70.test', displayName: 'Gordon Weissnat' },
  { handle: 'bettie-bogisich96.test', displayName: null },
  { handle: 'lura-jacobi55.test', displayName: null },
  { handle: 'santa-hermann78.test', displayName: 'Melissa Johnson' },
  { handle: 'dylan61.test', displayName: null },
  { handle: 'ryley-kerluke.test', displayName: 'Alexander Purdy' },
  { handle: 'moises-bins8.test', displayName: null },
  { handle: 'angelita-schaefer27.test', displayName: null },
  { handle: 'natasha83.test', displayName: 'Dean Romaguera' },
  { handle: 'sydni48.test', displayName: null },
  { handle: 'darrion91.test', displayName: 'Jeanette Weimann' },
  { handle: 'reynold-ortiz.test', displayName: null },
  { handle: 'hassie-schuppe.test', displayName: 'Rita Zieme' },
  { handle: 'clark-stehr8.test', displayName: 'Sammy Larkin' },
  { handle: 'preston-harris.test', displayName: 'Ms. Bradford Thiel' },
  { handle: 'benedict-schulist.test', displayName: 'Todd Stark' },
  { handle: 'alden-wolff22.test', displayName: null },
  { handle: 'joel-gulgowski.test', displayName: null },
  { handle: 'joanie56.test', displayName: 'Ms. Darin Cole' },
  { handle: 'israel-hermann0.test', displayName: 'Wilbur Schuster' },
  { handle: 'tracy56.test', displayName: null },
  { handle: 'kyle72.test', displayName: null },
  { handle: 'gunnar-dare70.test', displayName: 'Mrs. Angelo Keeling' },
  { handle: 'justus58.test', displayName: null },
  { handle: 'brooke24.test', displayName: 'Clint Ward' },
  { handle: 'angela-morissette.test', displayName: 'Jim Kertzmann' },
  { handle: 'amy-bins.test', displayName: 'Angelina Hills' },
  { handle: 'susanna81.test', displayName: null },
  { handle: 'jailyn-hettinger50.test', displayName: 'Sheldon Ratke' },
  { handle: 'wendell-hansen54.test', displayName: null },
  { handle: 'jennyfer-spinka.test', displayName: 'Leticia Blick' },
  { handle: 'alexandrea31.test', displayName: 'Leslie Von' },
  { handle: 'hazle-davis.test', displayName: 'Ella Farrell' },
  { handle: 'alta6.test', displayName: null },
  { handle: 'sherwood4.test', displayName: 'Dr. Hattie Nienow I' },
  { handle: 'marilie24.test', displayName: 'Gene Howell' },
  { handle: 'jimmie-feeney82.test', displayName: null },
  { handle: 'trisha-ohara.test', displayName: null },
  { handle: 'jake-schuster33.test', displayName: 'Raymond Price' },
  { handle: 'shane-torphy52.test', displayName: 'Sadie Carter' },
  { handle: 'nakia-kuphal8.test', displayName: null },
  { handle: 'lea-trantow.test', displayName: null },
  { handle: 'joel62.test', displayName: 'Veronica Nitzsche' },
  { handle: 'roosevelt33.test', displayName: 'Jay Moen' },
  { handle: 'talon-okeefe85.test', displayName: null },
  { handle: 'herman-dare.test', displayName: 'Eric White' },
  { handle: 'flavio-fay.test', displayName: 'John Lindgren' },
  { handle: 'elyse-prosacco.test', displayName: null },
  { handle: 'jessyca-wiegand23.test', displayName: 'Debra Lockman' },
  { handle: 'ara-spencer41.test', displayName: null },
  { handle: 'frederic-fadel.test', displayName: null },
  { handle: 'zora-gerlach.test', displayName: 'Noel Hansen' },
  { handle: 'spencer4.test', displayName: 'Marjorie Gorczany' },
  { handle: 'gage-wilkinson33.test', displayName: 'Preston Schoen V' },
  { handle: 'kiley-runolfsson1.test', displayName: null },
  { handle: 'ramona80.test', displayName: 'Sylvia Dietrich' },
  { handle: 'rashad97.test', displayName: null },
  { handle: 'kylie76.test', displayName: 'Josefina Pfeffer' },
  { handle: 'alisha-zieme.test', displayName: null },
  { handle: 'claud79.test', displayName: null },
  { handle: 'jairo-kuvalis.test', displayName: 'Derrick Jacobson' },
  { handle: 'delfina-emard.test', displayName: null },
  { handle: 'waino-gutmann20.test', displayName: 'Wesley Kemmer' },
  { handle: 'arvid-hermiston49.test', displayName: 'Vernon Towne PhD' },
  { handle: 'hans79.test', displayName: 'Rex Hartmann' },
  { handle: 'karlee-greenholt40.test', displayName: null },
  { handle: 'nels-cummings.test', displayName: null },
  { handle: 'andrew-maggio.test', displayName: null },
  { handle: 'stephany75.test', displayName: null },
  { handle: 'alba-lueilwitz.test', displayName: null },
  { handle: 'fermin47.test', displayName: null },
  { handle: 'milo-quitzon3.test', displayName: null },
  { handle: 'eudora-dietrich4.test', displayName: 'Carol Littel' },
  { handle: 'uriel-witting12.test', displayName: 'Sophia Schmidt' },
  { handle: 'reuben-stracke48.test', displayName: 'Darrell Walker MD' },
  { handle: 'letitia-sawayn11.test', displayName: 'Mrs. Sophie Reilly' },
  { handle: 'macy-schaden.test', displayName: 'Lindsey Klein' },
  { handle: 'imelda61.test', displayName: 'Shannon Beier' },
  { handle: 'oswald-bailey.test', displayName: 'Angel Mann' },
  { handle: 'pattie-fisher34.test', displayName: null },
  { handle: 'loyce95.test', displayName: 'Claude Tromp' },
  { handle: 'melyna-zboncak.test', displayName: null },
  { handle: 'rowan-parisian.test', displayName: 'Mr. Veronica Feeney' },
  { handle: 'lois-blanda20.test', displayName: 'Todd Rolfson' },
  { handle: 'turner-balistreri76.test', displayName: null },
  { handle: 'dee-hoppe65.test', displayName: null },
  { handle: 'nikko-rosenbaum60.test', displayName: 'Joann Gutmann' },
  { handle: 'cornell-romaguera53.test', displayName: null },
  { handle: 'zack3.test', displayName: null },
  { handle: 'fredrick41.test', displayName: 'Julius Kreiger' },
  { handle: 'elwyn62.test', displayName: null },
  { handle: 'isaias-hirthe37.test', displayName: 'Louis Cremin' },
  { handle: 'ronaldo36.test', displayName: null },
  { handle: 'jesse34.test', displayName: 'Bridget Schulist' },
  { handle: 'darrel-mills17.test', displayName: null },
  { handle: 'euna-mayert92.test', displayName: 'Grant Lang II' },
  { handle: 'terrell92.test', displayName: null },
  { handle: 'alyson-bogisich.test', displayName: 'Dana MacGyver' },
  { handle: 'nicolas65.test', displayName: null },
  { handle: 'bernita8.test', displayName: null },
  { handle: 'gunner23.test', displayName: 'Maggie DuBuque' },
  { handle: 'phoebe80.test', displayName: null },
  { handle: 'cory-cruickshank.test', displayName: null },
  { handle: 'conor-price.test', displayName: 'Ralph Daugherty III' },
  { handle: 'rae91.test', displayName: null },
  { handle: 'abigale-cronin.test', displayName: null },
  { handle: 'aileen-reilly90.test', displayName: 'Charles Stanton' },
  { handle: 'adrianna-hansen6.test', displayName: 'Elbert Langworth IV' },
  { handle: 'pierre54.test', displayName: null },
  { handle: 'jaida-stark62.test', displayName: 'Justin Stoltenberg MD' },
  { handle: 'wade-witting.test', displayName: null },
  { handle: 'yvonne-predovic5.test', displayName: 'Gregory Hamill' },
  { handle: 'spencer-dubuque.test', displayName: null },
  { handle: 'randi44.test', displayName: null },
  { handle: 'maye-grimes.test', displayName: null },
  { handle: 'margarette-effertz.test', displayName: null },
  { handle: 'aimee98.test', displayName: null },
  { handle: 'jaren-veum0.test', displayName: 'Dr. Omar Wolff' },
  { handle: 'ariel-abbott54.test', displayName: 'Emanuel Powlowski' },
  { handle: 'mercedes23.test', displayName: null },
  { handle: 'jarrett-orn.test', displayName: null },
  { handle: 'damion88.test', displayName: null },
  { handle: 'nayeli-koss73.test', displayName: 'Johnny Lang' },
  { handle: 'cara-wiegand69.test', displayName: null },
  { handle: 'gideon-ohara51.test', displayName: null },
  { handle: 'carolina-mcdermott77.test', displayName: 'Latoya Windler' },
  { handle: 'danyka90.test', displayName: 'Hope Kub' },
]
