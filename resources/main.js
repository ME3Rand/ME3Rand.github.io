function getRandomCharacter() {
	// [characterName, characterPng, weightLimit, hasBiotics, hasTech, hasGrenades]
	var charList = new Array();
	charList.push(['Human Adept', 'HumanAdeptSentinel', 200, true, false, false]);
	charList.push(['Asari Adept', 'Asari', 200, true, false, false]);
	charList.push(['Drell Adept', 'Drell', 250, true, false, true]);
	charList.push(['Asari Justicar Adept', 'AsariJusticar', 200, true, false, false]);
	charList.push(['Phoenix Project Adept', 'Phoenix', 200, true, false, false]);
	charList.push(['N7 Fury Adept', 'N7Fury', 200, true, false, false]);
	charList.push(['Volus Adept', 'VolusAdept', 200, true, false, false]);
	charList.push(['Krogan Shaman Adept', 'KroganShaman', 300, true, false, false]);
	charList.push(['Batarian Slasher Adept', 'BatarianSlasher', 250, true, false, true]);
	charList.push(['Awakened Collector Adept', 'Collector', 200, true, false, false]);
	charList.push(['Human Soldier', 'HumanSoldierVanguard', 250, false, false, true]);
	charList.push(['Krogan Soldier', 'Krogan', 300, false, false, true]);
	charList.push(['Turian Soldier', 'Turian', 250, false, false, false]);
	charList.push(['Battlefield 3 Soldier', 'BF3', 250, false, false, true]);
	charList.push(['Batarian Soldier', 'Batarian', 250, false, false, true]);
	charList.push(['Vorcha Soldier', 'Vorcha', 200, false, true, false]);
	charList.push(['N7 Destroyer Soldier', 'N7Destroyer', 500, false, false, true]);
	charList.push(['Turian Havoc Soldier', 'TurianHavoc', 250, false, true, true]);
	charList.push(['Geth Trooper Soldier', 'GethTrooper', 250, false, true, false]);
	charList.push(['Quarian Marksman Soldier', 'QuarianMarksman', 250, false, true, false]);
	charList.push(['Geth Juggernaut Soldier', 'GethJuggernaut', 250, false, true, false]);
	charList.push(['Human Engineer', 'HumanEngineerInfiltrator', 200, false, true, false]);
	charList.push(['Quarian Female Engineer', 'Quarian', 200, false, true, false]);
	charList.push(['Salarian Engineer', 'Salarian', 250, false, true, false]);
	charList.push(['Geth Engineer', 'GethEngineer', 250, false, true, false]);
	charList.push(['Quarian Male Engineer', 'QuarianMale', 250, false, true, true]);
	charList.push(['N7 Demolisher Engineer', 'N7Demolisher', 300, false, true, true]);
	charList.push(['Volus Engineer', 'VolusEngineer', 200, false, false, false]);
	charList.push(['Turian Saboteur Engineer', 'TurianSaboteur', 250, false, true, true]);
	charList.push(['Vorcha Hunter Engineer', 'VorchaHunter', 200, false, true, false]);
	if (!document.getElementById('chkTalonEngineer').checked) charList.push(['Talon Mercenary Engineer', 'TalonMercenary', 300, false, false, true]);
	charList.push(['Human Sentinel', 'HumanAdeptSentinel', 200, true, true, false]);
	charList.push(['Turian Sentinel', 'Turian', 250, true, true, false]);
	charList.push(['Krogan Sentinel', 'Krogan', 300, true, true, true]);
	charList.push(['Batarian Sentinel', 'Batarian', 250, true, true, false]);
	charList.push(['Vorcha Sentinel', 'Vorcha', 200, true, true, true]);
	charList.push(['N7 Paladin Sentinel', 'N7Paladin', 250, false, true, false]);
	charList.push(['Volus Mercenary Sentinel', 'VolusMercenary', 200, false, true, false]);
	charList.push(['Asari Valkyrie Sentinel', 'AsariValkyrie', 250, true, true, false]);
	charList.push(['Krogan Warlord Sentinel', 'KroganWarlord', 250, true, true, false]);
	charList.push(['Human Infiltrator', 'HumanEngineerInfiltrator', 250, false, false, true]);
	charList.push(['Salarian Infiltrator', 'Salarian', 250, false, true, false]);
	charList.push(['Quarian Female Infiltrator', 'Quarian', 250, false, true, true]);
	charList.push(['Geth Infiltrator', 'GethInfiltrator', 250, false, false, false]);
	charList.push(['Quarian Male Infiltrator', 'QuarianMale', 250, false, true, true]);
	charList.push(['N7 Shadow Infiltrator', 'N7Shadow', 200, false, true, false]);
	charList.push(['Turian Ghost Infiltrator', 'TurianGhost', 250, false, true, true]);
	charList.push(['Drell Assassin Infiltrator', 'DrellAssassin', 250, false, true, true]);
	charList.push(['Asari Huntress Infiltrator', 'AsariHuntress', 200, true, false, false]);
	charList.push(['Alliance Infiltration Unit Infiltrator', 'AIU', 250, false, true, true]);
	charList.push(['Human Vanguard', 'HumanSoldierVanguard', 200, true, false, false]);
	charList.push(['Drell Vanguard', 'Drell', 250, true, false, true]);
	charList.push(['Asari Vanguard', 'Asari', 250, true, false, true]);
	charList.push(['Krogan Vanguard', 'KroganBattlemaster', 250, true, false, false]);
	charList.push(['Phoenix Project Vanguard', 'Phoenix', 200, true, false, false]);
	charList.push(['N7 Slayer Vanguard', 'N7Slayer', 200, true, false, false]);
	charList.push(['Volus Protector Vanguard', 'VolusProtector', 200, true, false, false]);
	charList.push(['Batarian Brawler Vanguard', 'BatarianBrawler', 250, true, false, false]);
	charList.push(['Cabal Vanguard', 'Cabal', 250, true, false, true]);
	do {
		// roll character
			var randomIndex = Math.floor(Math.random() * charList.length);
			if (charList[randomIndex][0] === sessionStorage.getItem('prevCharacterName')) {
				randomIndex = Math.floor(Math.random() * charList.length);
			}
	} while (charList[randomIndex][0] === sessionStorage.getItem('characterName'));
	return charList[randomIndex];
}

function rollCharacter() {
	var character = getRandomCharacter();
	sessionStorage.setItem('characterName', character[0]);
	sessionStorage.setItem('weightLimit', character[2]);
	sessionStorage.setItem('hasBiotics', character[3]);
	sessionStorage.setItem('hasTech', character[4]);
	sessionStorage.setItem('hasGrenades', character[5]);
	document.getElementById('characteroutput').innerHTML = character[0];
	document.getElementById('characterPic').src = 'resources/Characters/' + character[1] + '.png';
}

function reRollCharacter() {
	rollCharacter();
	if (sessionStorage.getItem('powers') !== null) {
		rollPowers(true);
	}
}

function getPowerRanks() {
	switch(Math.floor(Math.random()*11)) {
		case 0:
			// 6/5/5/5/5
			var powers = [5,5,5,5,5];
			powers[Math.floor(Math.random()*5)] = 6;
			break;
		case 1:
			// 6/6/6/6/0
			var powers = [6,6,6,6,6];
			powers[Math.floor(Math.random()*5)] = 0;
			break;
		case 2:
		case 3:
		case 4:
			// 6/6/6/4/4
			var powers = [6,6,6,6,6];
			var pos = new Array(2);
			var i, j, k = 0;
			var r = Math.floor(Math.random()*10);
			loop:
			for (i=0;i<4;i++) {
				pos[0] = i;
				for (j=i+1;j<5;j++) {
					pos[1] = j;
					k++;
					if (k > r) break loop;
				}
			}
			powers[pos[0]] = 4;
			powers[pos[1]] = 4;
			break;
		case 5:
		case 6:
		case 7:
			// 6/6/6/5/3
			var powers = [6,6,6,6,6];
			var pos = new Array(2);
			var i, j, k = 0;
			var r = Math.floor(Math.random()*20);
			loop:
			for (i=0;i<5;i++) {
				pos[0] = i;
				for (j=0;j<5;j++) {
					if (i == j && ++j == 5) break;
					pos[1] = j;
					k++;
					if (k > r) break loop;
				}
			}
			powers[pos[0]] = 5;
			powers[pos[1]] = 3;
			break;
		default:
			// 6/6/5/5/4
			var powers = [6,6,6,6,6];
			var pos = new Array(3);
			var i, j, k, l= 0;
			var r = Math.floor(Math.random()*30);
			loop:
			for (i=0;i<5;i++) {
				pos[0] = i;
				for (j=0;j<4;j++) {
					if (i == j && ++j == 4) break;
					pos[1] = j;
					for (k=j+1;k<5;k++) {
						if (i == k && ++k == 5) break;
						pos[2] = k;
						l++;
						if (l > r) break loop;
					}
				}
			}
			powers[pos[0]] = 4;
			powers[pos[1]] = 5;
			powers[pos[2]] = 5;
			break;
	}
	return powers;
}

function rollPowers(rerollChar) {
	var character = sessionStorage.getItem('characterName');
	var rerolls = []; //[power, powerrank, rerolls]
	switch (character) {
		case 'Human Adept':
			var powers = [['Singularity', 40, 40, 50],			['Warp', 20, 30, 70],					['Shockwave', 100, 80, 50],				['Alliance Training', 50, 60, 20],		['Fitness', 40, 40, 40]];
			rerolls = [0, 4, 1];
			break;
		case 'Asari Adept':
			var powers = [['Stasis', 50, 40, 70],				['Warp', 20, 30, 70],					['Throw', 40, 80, 50],					['Asari Justicar', 50, 60, 20],			['Fitness', 20, 20, 20]];
			rerolls = [1, 4, 1];
			break;
		case 'Drell Adept':
			var powers = [['Reave', 20, 70, 30],				['Pull', 40, 50, 60],					['Cluster Grenade', 60, 30, 70],		['Drell Assassin', 40, 70, 20],			['Fitness', 20, 20, 20]];
			rerolls = [0, 5, 1];
			break;
		case 'Asari Justicar Adept':
			var powers = [['Biotic Sphere', 40, 30, 20],		['Reave', 20, 70, 30],					['Pull', 40, 50, 60],					['Asari Justicar', 50, 60, 20],			['Fitness', 20, 20, 20]];
			break;
		case 'Phoenix Project Adept':
			var powers = [['Singularity', 40, 40, 40],			['Smash', 70, 60, 60],					['Lash', 20, 60, 30],					['Phoenix Training', 40, 70, 20],		['Fitness', 50, 50, 50]];
			rerolls = [1, 4, 1];
			break;
		case 'N7 Fury Adept':
			var powers = [['Annihilation Field', 40, 50, 20],	['Dark Channel', 70, 40, 40],			['Throw', 40, 80, 50],					['N7 Fury', 50, 50, 20],				['Fitness', 20, 20, 20]];
			rerolls = [0, 6, 2];
			break;
		case 'Volus Adept':
			var powers = [['Stasis', 50, 40, 70],				['Biotic Orbs', 50, 30, 50],			['Shield Boost', 60, 40, 40],			['Volus Training', 60, 50, 30],			['Fitness', 20, 20, 20]];
			rerolls = [2, 3, 1];
			break;
		case 'Krogan Shaman Adept':
			var powers = [['Barrier', 20, 30, 50],				['Warp', 20, 30, 70],					['Shockwave', 100, 80, 50],				['Krogan Berserker', 50, 60, 20],		['Rage', 60, 70, 60]];
			break;
		case 'Batarian Slasher Adept':
			var powers = [['Lash', 20, 60, 30],					['Warp', 20, 30, 70],					['Cluster Grenade', 60, 30, 60],		['Batarian Enforcer',  40, 70, 20],		['Fitness', 50, 70, 50]];
			rerolls = [1, 4, 1];
			break;
		case 'Awakened Collector Adept':
			var powers = [['Dark Sphere', 60, 10, 50],			['Seeker Swarm', 70, 70, 70],			['Dark Channel', 70, 40, 40],			['Vengeful Ancient', 40, 70, 60],		['Ancient Warrior', 20, 50, 20]];
			rerolls = [3, 4, 1];
			break;
		case 'Human Soldier':
			var powers = [['Adrenaline Rush', 50, 40, 60],		['Concussive Shot', 50, 70, 40],		['Frag Grenade', 50, 40, 70],			['Alliance Training', 50, 60, 20],		['Fitness', 40, 40, 40]];
			break;
		case 'Krogan Soldier':
			var powers = [['Fortification', 50, 40, 50],		['Carnage', 40, 20, 50],				['Inferno Grenade', 60, 50, 70],		['Krogan Berserker', 50, 70, 20],		['Rage', 60, 70, 60]];
			break;
		case 'Turian Soldier':
			var powers = [['Marksman', 50, 50, 70],				['Concussive Shot', 50, 70, 40],		['Proximity Mine', 40, 80, 40],			['Turian Veteran', 70, 40, 20],			['Fitness', 20, 20, 20]];
			rerolls = [0, 5, 1];
			break;
		case 'Battlefield 3 Soldier':
			var powers = [['Adrenaline Rush', 50, 40, 60],		['Carnage', 40, 20, 50],				['Frag Grenade', 50, 40, 70],			['Alliance Training', 50, 60, 20],		['Fitness', 40, 40, 40]];
			break;
		case 'Batarian Soldier':
			var powers = [['Ballistic Blades', 50, 60, 50],		['Blade Armor', 50, 50, 50],			['Inferno Grenade', 60, 50, 70],		['Batarian Enforcer',  40, 70, 20],		['Fitness', 50, 70, 50]];
			break;
		case 'Vorcha Soldier':
			var powers = [['Bloodlust', 30, 50, 30],			['Flamer', 40, 60, 60],					['Carnage', 40, 20, 50],				['Vorcha Resilience', 50, 70, 20],		['Fitness', 40, 40, 40]];
			rerolls = [0, 4, 1];
			break;
		case 'N7 Destroyer Soldier':
			var powers = [['Devastator Mode', 40, 50, 50],		['Hawk Missile Launcher', 70, 60, 60],	['Multi-Frag Grenade', 60, 40, 60],		['T5-V Battlesuit', 70, 60, 20],		['T5-V Internal Systems', 30, 40, 30]];
			rerolls = [0, 5, 1];
			break;
		case 'Turian Havoc Soldier':
			var powers = [['Havoc Strike', 60, 60, 30],			['Stimulant Pack', 50, 30, 50],			['Cryo Blast', 30, 20, 30],				['Armiger Legion', 50, 50, 20],			['Fitness', 50, 70, 50]];
			break;
		case 'Geth Trooper Soldier':
			var powers = [['Flamer', 40, 60, 60],				['Fortification', 50, 40, 50],			['Hunter Mode', 50, 50, 50],			['Networked AI', 40, 60, 20],			['Advanced Hardware', 50, 50, 50]];
			rerolls = [1, 4, 1];
			break;
		case 'Quarian Marksman Soldier':
			var powers = [['Marksman', 50, 50, 70],				['Tactical Scan', 70, 10, 50],			['Sabotage', 20, 40, 30],				['Quarian Defender', 70, 30, 20],		['Fitness', 20, 20, 20]];
			rerolls = [0, 6, 2];
			break;
		case 'Geth Juggernaut Soldier':
			var powers = [['Hex Shield', 60, 60, 60],			['Siege Pulse', 60, 50, 50],			['Geth Turret', 40, 40, 50],			['Geth Juggernaut', 50, 50, 20],		['Hardened Platform', 40, 50, 50]];
			rerolls = [1, 4, 1];
			break;
		case 'Human Engineer':
			var powers = [['Combat Drone', 20, 70, 20],			['Incinerate', 40, 70, 30],				['Overload', 70, 80, 40],				['Alliance Training', 50, 60, 20],		['Fitness', 20, 20, 20]];
			rerolls = [2, 4, 1];
			break;
		case 'Quarian Female Engineer':
			var powers = [['Sentry Turret', 30, 50, 20],		['Incinerate', 60, 70, 60],				['Cryo Blast', 30, 20, 30],				['Quarian Defender', 40, 70, 20],		['Fitness', 20, 20, 20]];
			rerolls = [1, 4, 1];
			break;
		case 'Salarian Engineer':
			var powers = [['Energy Drain', 40, 70, 30],			['Decoy', 40, 70, 80],					['Incinerate', 60, 70, 30],				['Salarian Operative', 60, 50, 20],		['Fitness', 20, 20, 20]];
			rerolls = [0, 4, 1];
			break;
		case 'Geth Engineer':
			var powers = [['Geth Turret', 40, 40, 50],			['Hunter Mode', 50, 50, 50],			['Overload', 70, 80, 40],				['Networked AI', 50, 60, 20],			['Advanced Hardware', 20, 30, 30]];
			rerolls = [1, 4, 1];
			break;
		case 'Quarian Male Engineer':
			var powers = [['Tactical Scan', 40, 10, 50],		['Incinerate', 40, 70, 30],				['Arc Grenade', 70, 20, 40],			['Quarian Defender', 40, 70, 20],		['Fitness', 20, 20, 20]];
			rerolls = [2, 5, 1];
			break;
		case 'N7 Demolisher Engineer':
			var powers = [['Supply Pylon', 80, 40, 80],			['Arc Grenade', 70, 20, 40],			['Homing Grenade', 40, 30, 50],			['N7 Demolisher', 40, 70, 60],			['Fitness', 20, 20, 20]];
			rerolls = [1, 5, 1];
			break;
		case 'Volus Engineer':
			var powers = [['Recon Mine', 50, 50, 40],			['Proximity Mine', 40, 80, 40],			['Shield Boost', 60, 40, 40],			['Volus Training', 60, 50, 30],			['Fitness', 20, 20, 20]];
			rerolls = [2, 3, 1];
			break;
		case 'Turian Saboteur Engineer':
			var powers = [['Sentry Turret', 30, 50, 20],		['Sabotage', 20, 40, 20],				['Homing Grenade', 40, 30, 50],			['Armiger Legion', 50, 50, 20],			['Fitness', 20, 20, 20]];
			rerolls = [2, 4, 1];
			break;
		case 'Vorcha Hunter Engineer':
			var powers = [['Submission Net', 60, 50, 40],		['Incinerate', 60, 70, 30],				['Bloodlust', 30, 50, 30],				['Vorcha Resilience', 50, 70, 20],		['Fitness', 30, 30, 30]];
			rerolls = [2, 4, 1];
			break;
		case 'Talon Mercenary Engineer':
			var powers = [['Cain Trip Mine', 50, 70, 50],		['Concussive Arrows', 40, 50, 50],		['Armor-Piercing Arrows', 50, 30, 50],	['Elite Mercenary', 40, 70, 50],		['Omni-Bow Mastery', 60, 70, 70]];
			break;
		case 'Human Sentinel':
			var powers = [['Tech Armor', 20, 70, 50],			['Warp', 20, 30, 70],					['Throw', 40, 80, 50],					['Alliance Training', 50, 60, 20],		['Fitness', 40, 40, 40]];
			break;
		case 'Turian Sentinel':
			var powers = [['Tech Armor', 20, 70, 50],			['Warp', 30, 30, 70],					['Overload', 70, 80, 40],				['Turian Veteran', 70, 40, 20],			['Fitness', 40, 40, 40]];
			rerolls = [4, 4, 1];
			break;
		case 'Krogan Sentinel':
			var powers = [['Tech Armor', 20, 50, 50],			['Incinerate', 60, 70, 30],				['Lift Grenade', 70, 90, 10],			['Krogan Berserker', 50, 60, 20],		['Rage', 60, 70, 60]];
			break;
		case 'Batarian Sentinel':
			var powers = [['Blade Armor', 50, 50, 50],			['Shockwave', 100, 40, 50],				['Submission Net', 60, 50, 40],			['Batarian Enforcer',  40, 70, 20],		['Fitness', 50, 70, 50]];
			break;
		case 'Vorcha Sentinel':
			var powers = [['Bloodlust', 30, 70, 30],			['Flamer', 40, 60, 60],					['Cluster Grenade', 60, 50, 70],		['Vorcha Resilience', 40, 70, 20],		['Fitness', 40, 40, 40]];
			rerolls = [0, 4, 1];
			break;
		case 'N7 Paladin Sentinel':
			var powers = [['Energy Drain', 40, 70, 30],			['Incinerate', 60, 70, 60],				['Snap Freeze', 20, 30, 90],			['N7 Paladin', 50, 60, 30],				['Shield Mastery', 40, 40, 50]];
			rerolls = [2, 4, 1];
			break;
		case 'Volus Mercenary Sentinel':
			var powers = [['Decoy', 40, 70, 80],				['Combat Drone', 20, 70, 20],			['Shield Boost', 60, 40, 40],			['Volus Training', 60, 50, 30],			['Fitness', 20, 20, 20]];
			rerolls = [2, 3, 1];
			break;
		case 'Asari Valkyrie Sentinel':
			var powers = [['Tech Armor', 20, 70, 50],			['Warp', 20, 30, 70],					['Annihilation Field', 40, 50, 20],		['Asari Valkyrie', 50, 50, 30],			['Fitness', 40, 40, 40]];
			rerolls = [2, 6, 2];
			break;
		case 'Krogan Warlord Sentinel':
			var powers = [['Tech Armor', 20, 20, 30],			['Biotic Hammer', 70, 30, 30],			['Electrical Hammer', 60, 60, 50],		['Krogan Warlord', 30, 70, 20],			['Warlord Rage', 60, 80, 60]];
			rerolls = [4, 4, 1];
			break;
		case 'Human Infiltrator':
			var powers = [['Tactical Cloak', 40, 70, 40],		['Cryo Blast', 30, 20, 30],				['Sticky Grenade', 50, 20, 80],			['Alliance Training', 50, 60, 20],		['Fitness', 20, 20, 20]];
			rerolls = [0, 4, 1];
			break;
		case 'Salarian Infiltrator':
			var powers = [['Tactical Cloak', 40, 70, 30],		['Proximity Mine', 40, 80, 50],			['Energy Drain', 40, 70, 50],			['Salarian Operative', 60, 50, 20],		['Fitness', 20, 20, 20]];
			rerolls = [0, 4, 1];
			break;
		case 'Quarian Female Infiltrator':
			var powers = [['Tactical Cloak', 40, 70, 50],		['Sticky Grenade', 50, 20, 80],			['Sabotage', 20, 60, 20],				['Quarian Defender', 40, 70, 20],		['Fitness', 20, 20, 20]];
			rerolls = [0, 4, 1];
			break;
		case 'Geth Infiltrator':
			var powers = [['Tactical Cloak', 40, 50, 30],		['Proximity Mine', 40, 80, 50],			['Hunter Mode', 30, 30, 50],			['Networked AI', 70, 40, 20],			['Advanced Hardware', 50, 50, 50]];
			rerolls = [2, 4, 1];
			break;
		case 'Quarian Male Infiltrator':
			var powers = [['Tactical Cloak', 40, 70, 30],		['Tactical Scan', 60, 10, 50],			['Arc Grenade', 70, 20, 50],			['Quarian Defender', 60, 60, 20],		['Fitness', 20, 20, 20]];
			rerolls = [2, 5, 1];
			break;
		case 'N7 Shadow Infiltrator':
			var powers = [['Tactical Cloak', 60, 20, 70],		['Electric Slash', 50, 10, 50],			['Shadow Strike', 50, 80, 30],			['N7 Shadow', 40, 70, 20],				['Sword Mastery', 80, 80, 50]];
			rerolls = [0, 5, 1];
			break;
		case 'Turian Ghost Infiltrator':
			var powers = [['Tactical Cloak', 40, 50, 30],		['Stimulant Pack', 50, 30, 50],			['Overload', 70, 80, 40],				['Armiger Legion', 60, 50, 20],			['Fitness', 40, 40, 40]];
			break;
		case 'Drell Assassin Infiltrator':
			var powers = [['Tactical Cloak', 40, 70, 10],		['Homing Grenade', 40, 30, 60],			['Recon Mine', 50, 70, 40],				['Drell Assassin', 40, 70, 20],			['Fitness', 20, 20, 20]];
			rerolls = [0, 4, 1];
			break;
		case 'Asari Huntress Infiltrator':
			var powers = [['Tactical Cloak', 40, 70, 30],		['Dark Channel', 70, 60, 40],			['Warp', 20, 30, 70],					['Asari Huntress', 30, 70, 20],			['Fitness', 20, 20, 20]];
			rerolls = [0, 4, 1];
			break;
		case 'Alliance Infiltration Unit Infiltrator':
			var powers = [['Tactical Cloak', 40, 50, 30],		['Snap Freeze', 40, 30, 50],			['Repair Matrix', 50, 30, 30],			['Unshackled A.I.', 60, 50, 20],		['Fitness Module', 40, 40, 40]];
			break;
		case 'Human Vanguard':
			var powers = [['Biotic Charge', 30, 40, 30],		['Shockwave', 100, 80, 50],				['Nova', 60, 50, 70],					['Alliance Training', 50, 60, 20],		['Fitness', 30, 50, 30]];
			rerolls = [0, 6, 2];
			break;
		case 'Drell Vanguard':
			var powers = [['Biotic Charge', 30, 40, 20],		['Pull', 40, 50, 60],					['Cluster Grenade', 60, 50, 70],		['Drell Assassin', 40, 70, 20],			['Fitness', 30, 50, 30]];
			rerolls = [0, 6, 2];
			break;
		case 'Asari Vanguard':
			var powers = [['Biotic Charge', 30, 40, 20],		['Stasis', 50, 50, 70],					['Lift Grenade', 70, 90, 10],			['Asari Justicar', 50, 60, 20],			['Fitness', 30, 50, 30]];
			rerolls = [0, 6, 2];
			break;
		case 'Krogan Vanguard':
			var powers = [['Biotic Charge', 30, 50, 20],		['Carnage', 40, 20, 50],				['Barrier', 20, 30, 50],				['Krogan Battlemaster', 50, 60, 20],	['Rage', 60, 80, 60]];
			rerolls = [0, 6, 2];
			break;
		case 'Phoenix Project Vanguard':
			var powers = [['Biotic Charge', 30, 40, 20],		['Smash', 50, 60, 60],					['Lash', 20, 60, 30],					['Phoenix Training', 40, 70, 20],		['Fitness', 50, 50, 50]];
			rerolls = [0, 6, 2];
			break;
		case 'N7 Slayer Vanguard':
			var powers = [['Biotic Charge', 30, 40, 20],		['Phase Disruptor', 60, 20, 60],		['Biotic Slash', 50, 60, 50],			['N7 Slayer', 40, 70, 20],				['Fitness', 50, 50, 50]];
			rerolls = [0, 6, 2];
			break;
		case 'Volus Protector Vanguard':
			var powers = [['Biotic Charge', 30, 60, 20],		['Shield Boost', 60, 50, 40],			['Biotic Orbs', 50, 30, 30],			['Volus Training', 60, 50, 30],			['Fitness', 30, 50, 40]];
			rerolls = [0, 6, 2];
			break;
		case 'Batarian Brawler Vanguard':
			var powers = [['Biotic Charge', 30, 60, 20],		['Lash', 20, 60, 30],					['Blade Armor', 30, 40, 50],			['Batarian Enforcer',  40, 70, 20],		['Fitness', 50, 70, 70]];
			rerolls = [0, 6, 2];
			break;
		case 'Cabal Vanguard':
			var powers = [['Poison Strike', 50, 60, 60],		['Nightshade Blades', 60, 50, 50],		['Biotic Focus', 50, 60, 80],			['Turian Veteran', 50, 60, 20],			['Venom Gauntlets', 40, 50, 40]];
			break;
	}
	//var powerRanks = sessionStorage.getItem('powers').split('/');
	if (!rerollChar) {
		var powerRanks, i;
		do {
			powerRanks = getPowerRanks();
			if (rerolls.length > 0) {
				for (i=0; i < rerolls[2] && powerRanks[rerolls[0]] < rerolls[1]; i++) powerRanks = getPowerRanks();
			}
		} while (powerRanks.join('/') === sessionStorage.getItem('powers'));
		sessionStorage.setItem('powers', powerRanks.join('/'));
	} else {
		var powerRanks = sessionStorage.getItem('powers').split('/');
	}
	
	for (var i = 0; i < 5; i++) {
		document.getElementById('power' + (i+1) + 'name').innerHTML = powers[i][0];
		for (var j = 1; j < 7; j++) {
			if (j <= powerRanks[i]) {
				if (j<=3) {
					document.getElementById('power' + (i+1) + 'rank' + j).src = 'resources/lk2.png';
				} else {
					if (Math.floor(Math.random()*100) < powers[i][j-3]) {
						document.getElementById('power' + (i+1) + 'rank' + j).src = 'resources/lk2_A.png';
					} else {
						document.getElementById('power' + (i+1) + 'rank' + j).src = 'resources/lk2_B.png';
					}
				}
			} else {
				document.getElementById('power' + (i+1) + 'rank' + j).src = 'resources/lk1.png';
			}
		}
	}
}

function reRollPowers() {
	if (document.getElementById('power1name').innerHTML != "") rollPowers(false);
}

function rollWeaponCount() {
	var weaponCount = 0;
	if (document.getElementById('chkWeaponCountAny').checked) {
		weaponCount = Math.floor(Math.random() * 2);
	} else if (document.getElementById('chkWeaponCountTwo').checked) {
		weaponCount = 1;
	}
	sessionStorage.setItem('weaponCount', weaponCount);
}

function getRandomWeapon(slot, race, weight) {
	// [weaponType, weaponName, weaponPng, weight, canPierce, accuracy/spare_ammo, canHeadshot, needsPiercing]
	var assaultRifles = new Array();
	assaultRifles.push([1, 'M-8 Avenger', 'AssaultRifle_Avenger', 50, true, true, true, true]);
	assaultRifles.push([1, 'M-15 Vindicator', 'AssaultRifle_Vindicator', 70, true, true, true, true]);
	assaultRifles.push([1, 'M-96 Mattock', 'AssaultRifle_Mattock', 90, true, true, true, true]);
	assaultRifles.push([1, 'Phaeston', 'AssaultRifle_Phaeston', 80, true, true, true, true]);
	assaultRifles.push([1, 'Adas Anti-Synthetic Rifle', 'AssaultRifle_Adas', 140, false, false, true, false]);
	assaultRifles.push([1, 'Collector Rifle', 'AssaultRifle_Collector', 120, true, true, true, true]);
	assaultRifles.push([1, 'Geth Pulse Rifle', 'AssaultRifle_Geth', 50, true, true, true, true]);
	assaultRifles.push([1, 'M-37 Falcon', 'AssaultRifle_Falcon', 100, false, false, false, false]);
	assaultRifles.push([1, 'M-55 Argus', 'AssaultRifle_Argus', 140, true, true, true, false]);
	assaultRifles.push([1, 'M-76 Revenant', 'AssaultRifle_Revenant', 125, true, true, true, true]);
	assaultRifles.push([1, 'Striker Assault Rifle', 'AssaultRifle_Striker', 140, false, true, false, false]);
	assaultRifles.push([1, 'Cerberus Harrier', 'AssaultRifle_Cerberus', 125, true, true, true, true]);
	assaultRifles.push([1, 'Geth Spitfire', 'AssaultRifle_Spitfire', 250, true, true, true, true]);
	if (race != 'Drell') assaultRifles.push([1, 'M-7 Lancer', 'AssaultRifle_Lancer', 80, true, true, true, true]);
	assaultRifles.push([1, 'M-99 Saber', 'AssaultRifle_Saber', 140, true, true, true, false]);
	assaultRifles.push([1, 'N7 Typhoon', 'AssaultRifle_Typhoon', 200, true, true, true, true]);
	assaultRifles.push([1, 'N7 Valkyrie', 'AssaultRifle_Valkyrie', 125, true, true, true, true]);
	if (race != 'Drell') assaultRifles.push([1, 'Particle Rifle', 'AssaultRifle_ParticleRifle', 140, true, true, true, true]);
	var pistols = new Array();
	pistols.push([2, 'M-3 Predator', 'Pistol_Predator', 20, true, true, true, true]);
	pistols.push([2, 'M-5 Phalanx', 'Pistol_Phalanx', 25, true, true, true, true]);
	pistols.push([2, 'Acolyte', 'Pistol_Acolyte', 20, false, true, false, false]);
	pistols.push([2, 'Arc Pistol', 'Pistol_ArcPistol', 60, true, true, true, true]);
	pistols.push([2, 'Executioner Pistol', 'Pistol_Executioner', 70, true, true, true, false]);
	pistols.push([2, 'M-6 Carnifex', 'Pistol_Carnifex', 70, true, true, true, false]);
	pistols.push([2, 'M-11 Suppressor', 'Pistol_Suppressor', 70, true, true, true, true]);
	pistols.push([2, 'M-77 Paladin', 'Pistol_Paladin', 70, true, true, true, false]);
	pistols.push([2, 'M-358 Talon', 'Pistol_Talon', 60, true, true, true, true]);
	pistols.push([2, 'N7 Eagle', 'Pistol_Eagle', 25, true, true, true, true]);
	pistols.push([2, 'Scorpion', 'Pistol_Scorpion', 60, false, true, false, false]);
	var shotguns = new Array();
	shotguns.push([3, 'M-23 Katana', 'Shotgun_Katana', 90, true, true, true, true]);
	shotguns.push([3, 'M-22 Eviscerator', 'Shotgun_Eviscerator', 70, true, true, true, true]);
	shotguns.push([3, 'M-27 Scimitar', 'Shotgun_Scimitar', 60, true, true, true, true]);
	shotguns.push([3, 'AT-12 Raider', 'Shotgun_Raider', 140, true, true, true, true]);
	shotguns.push([3, 'Disciple', 'Shotgun_Disciple', 50, true, true, true, true]);
	shotguns.push([3, 'Geth Plasma Shotgun', 'Shotgun_Geth', 140, false, false, false, false]);
	shotguns.push([3, 'Graal Spike Thrower', 'Shotgun_Graal', 140, false, true, true, false]);
	shotguns.push([3, 'M-300 Claymore', 'Shotgun_Claymore', 200, true, true, true, false]);
	shotguns.push([3, 'N7 Piranha', 'Shotgun_Piranha', 90, true, true, true, true]);
	shotguns.push([3, 'Reeger Carbine', 'Shotgun_Reeger', 125, true, false, true, true]);
	shotguns.push([3, 'M-11 Wraith', 'Shotgun_Wraith', 90, true, true, true, true]);
	shotguns.push([3, 'N7 Crusader', 'Shotgun_Crusader', 200, true, false, true, false]);
	shotguns.push([3, 'Venom Shotgun', 'Shotgun_Venom', 140, false, false, false, false]);
	var smgs = new Array();
	smgs.push([4, 'M-4 Shuriken', 'SMG_Shuriken', 20, true, true, true, true]);
	smgs.push([4, 'M-9 Tempest', 'SMG_Tempest', 30, true, true, true, true]);
	smgs.push([4, 'M-12 Locust', 'SMG_Locust', 30, true, true, true, true]);
	smgs.push([4, 'Geth Plasma SMG', 'SMG_Geth', 30, true, true, true, true]);
	smgs.push([4, 'M-25 Hornet', 'SMG_Hornet', 45, true, true, true, true]);
	smgs.push([4, 'Blood Pack Punisher', 'SMG_Bloodpack', 45, true, true, true, true]);
	smgs.push([4, 'Collector SMG', 'SMG_Collector', 45, true, false, true, true]);
	smgs.push([4, 'N7 Hurricane', 'SMG_Hurricane', 45, true, true, true, true]);
	var snipers = new Array();
	snipers.push([5, 'M-92 Mantis', 'SniperRifle_Mantis', 100, true, true, true, false]);
	snipers.push([5, 'M-13 Raptor', 'SniperRifle_Raptor', 70, true, true, true, true]);
	snipers.push([5, 'M-29 Incisor', 'SniperRifle_Incisor', 90, true, true, true, true]);
	snipers.push([5, 'M-97 Viper', 'SniperRifle_Viper', 70, true, true, true, false]);
	if (race != 'Drell') snipers.push([5, 'Collector Sniper Rifle', 'SniperRifle_Collector', 140, true, false, true, true]);
	snipers.push([5, 'Kishock Harpoon Gun', 'SniperRifle_Kishock', 140, false, true, true, false]);
	snipers.push([5, 'Krysae Sniper Rifle', 'SniperRifle_Krysae', 140, false, true, false, false]);
	snipers.push([5, 'M-98 Widow', 'SniperRifle_Widow', 200, true, true, true, false]);
	snipers.push([5, 'Black Widow', 'SniperRifle_BlackWidow', 200, true, true, true, false]);
	snipers.push([5, 'Javelin', 'SniperRifle_Javelin', 240, true, true, true, false]);
	snipers.push([5, 'M-90 Indra', 'SniperRifle_Indra', 70, true, true, true, true]);
	snipers.push([5, 'N7 Valiant', 'SniperRifle_Valiant', 100, true, true, true, false]);
	if (sessionStorage.getItem('weaponCount') === '1') {
		var sndWeight = 40;
		if (slot == 1) {
			var sndWeaponType = sessionStorage.getItem('weaponType2');
			if (sessionStorage.getItem('weight2') !== null) sndWeight = parseInt(sessionStorage.getItem('weight2'));
		} else {
			var sndWeaponType = sessionStorage.getItem('weaponType1');
			if (sessionStorage.getItem('weight1') !== null) sndWeight = parseInt(sessionStorage.getItem('weight1'));
		}
	}
	var weaponList = new Array();
	if (sndWeaponType !== '1') weaponList.push(assaultRifles);
	if (sndWeaponType !== '2') weaponList.push(pistols);
	if (sndWeaponType !== '3') weaponList.push(shotguns);
	if (sndWeaponType !== '4') weaponList.push(smgs);
	if (sndWeaponType !== '5') weaponList.push(snipers);
	// check weight
		if (document.getElementById('chkLimitWeight').checked) {
			if (sessionStorage.getItem('weaponCount') === '1') weight -= sndWeight;
			for (var i=0; i < weaponList.length; i++) {
				for (var j=0; j < weaponList[i].length; j++) {
					if (weaponList[i][j][3] > weight) {
						weaponList[i].splice(j, 1);
						j--;
					}
				}
				if (weaponList[i].length == 0) {
					weaponList.splice(i, 1);
					i--;
				}
			}
		}
	do {
		// roll weapon
			var randomIndex = Math.floor(Math.random() * weaponList.length);
			var wType = weaponList[randomIndex];
			randomIndex = Math.floor(Math.random() * wType.length);
		// second roll if repeated weapon
			if (wType[randomIndex][0] === sessionStorage.getItem('prevWeaponName1') || wType[randomIndex][0] === sessionStorage.getItem('prevWeaponName2')) {
				randomIndex = Math.floor(Math.random() * weaponList.length);
				wType = weaponList[randomIndex];
				randomIndex = Math.floor(Math.random() * wType.length);
			}
	} while (wType[randomIndex][0] === sessionStorage.getItem('weaponName' + slot));
	return wType[randomIndex];
}

function rollWeapon(slot) {
	var weapon = getRandomWeapon(slot, sessionStorage.getItem('characterName').replace(/\s.*/i, ''), parseInt(sessionStorage.getItem('weightLimit')));
	sessionStorage.setItem('weaponType' + slot, weapon[0]);
	sessionStorage.setItem('weaponName' + slot, weapon[1]);
	sessionStorage.setItem('weight' + slot, weapon[3]);
	sessionStorage.setItem('canPierce' + slot, weapon[4]);
	sessionStorage.setItem('stblAmmo' + slot, weapon[5]);
	sessionStorage.setItem('canHeadshot' + slot, weapon[6]);
	sessionStorage.setItem('needsPiercing' + slot, weapon[7]);
	document.getElementById('weaponoutput' + slot).innerHTML = weapon[1];
	document.getElementById('weaponPic' + slot).src = 'resources/Weapons/' + weapon[2] + '.png';
}

function reRollWeapon(slot) {
	var weaponType = sessionStorage.getItem('weaponType' + slot);
	rollWeapon(slot);
	if (sessionStorage.getItem('mods') === 'true' && weaponType !== sessionStorage.getItem('weaponType' + slot)) {
		sessionStorage.removeItem('weapon' + slot + 'mod1');
		sessionStorage.removeItem('weapon' + slot + 'mod2');
		rollWeaponMods(slot);
	}
}

function getWeaponMods(slot, weaponType, canPierce, stblAmmo, needsPiercing) {
	var uselessMods = !document.getElementById('chkUselessMods').checked;
	switch(weaponType) {
		case '1': // AR Mods
			var mods = new Array(['Magazine Upgrade', 'MagazineUpgrade', 0, false], ['Extended Barrel', 'AssaultRifle_ExtendedBarrel', 2, false], ['Precision Scope', 'AssaultRifle_PrecisionScope', 3, false], ['Thermal Scope', 'AssaultRifle_ThermalScope', 3, false], ['Omni-Blade', 'OmniBlade', 0, false], ['Ultralight Materials', 'UltralightMaterials', 1, false]);
			if (canPierce || uselessMods) mods.push(['Piercing Mod', 'PiercingMod', 1, true], ['High-Velocity Barrel', 'AssaultRifle_HighVelocityBarrel', 2, true]);
			if (stblAmmo || uselessMods) mods.push(['Stability Damper', 'AssaultRifle_StabilityDamper', 0, false]);
			break;
		case '2': // Pistol Mods
			var mods = new Array(['Melee Stunner', 'Pistol_MeleeStunner', 0, false], ['Magazine Upgrade', 'MagazineUpgrade', 1, false], ['High-Caliber Barrel', 'HighCaliberBarrel', 2, false], ['Scope', 'Scope', 3, false], ['Ultralight Materials', 'UltralightMaterials', 1, false], ['Heavy Barrel', 'Pistol_HeavyBarrel', 2, true], ['Power Magnifier', 'Pistol_PowerMagnifier', 3, false]);
			if (canPierce || uselessMods) mods.push(['Piercing Mod', 'PiercingMod', 0, true], ['Cranial Trauma System', 'Pistol_CranialTraumaSystem', 2, false]);
			break;
		case '3': // Shotgun Mods
			var mods = new Array(['Spare Thermal Clip', 'SpareThermalClip', 0, false], ['Blade Attachment', 'Shotgun_BladeAttachment', 1, false], ['High Caliber Barrel', 'Shotgun_HighCaliberBarrel', 2, false], ['Omni-Blade', 'OmniBlade', 1, false], ['High-Velocity Barrel', 'Shotgun_HighVelocityBarrel', 2, true], ['Ultralight Materials', 'UltralightMaterials', 3, false]);
			if (canPierce || uselessMods) mods.push(['Shredder Mod', 'Shotgun_ShredderMod', 0, true]);
			if (stblAmmo || uselessMods) mods.push(['Smart Choke', 'Shotgun_SmartChoke', 3, false]);
			break;
		case '4': // SMG Mods
			var mods = new Array(['Ultralight Materials', 'UltralightMaterials', 1, false], ['Magazine Upgrade', 'MagazineUpgrade', 0, false], ['High Caliber Barrel', 'HighCaliberBarrel', 2, false], ['Scope', 'Scope', 3, false], ['High-Velocity Barrel', 'SMG_HighVelocityBarrel', 2, true], ['Recoil System', 'AssaultRifle_StabilityDamper', 1, false], ['Power Magnifier', 'SMG_PowerMagnifier', 3, false]);
			if (stblAmmo) mods.push(['Heat Sink', 'SMG_HeatSink', 0, false]);
			break;
		case '5': // Sniper Mods
			var mods = new Array(['Extended Barrel', 'HighCaliberBarrel', 1, false], ['Enhanced Scope', 'SniperRifle_EnhancedScope', 2, false], ['Thermal Scope', 'SniperRifle_ThermalScope', 2, false], ['High-Velocity Barrel', 'SniperRifle_HighVelocityBarrel', 1, true], ['Ultralight Materials', 'UltralightMaterials', 0, false]);
			if (canPierce || uselessMods) mods.push(['Piercing Mod', 'PiercingMod', 0, true]);
			if (stblAmmo || uselessMods) mods.push(['Spare Thermal Clip', 'SpareThermalClip', 0, false]);
			break;
	}
	var modArray, randomIndex, randomMods, i, j;
	var piercingAmmo = sessionStorage.getItem('ammo') !== 'Armor-Piercing Rounds' && sessionStorage.getItem('ammo') !=='Drill Rounds' && sessionStorage.getItem('ammo') !=='Warp Rounds' && sessionStorage.getItem('ammo') !=='Cryo Rounds';
	var rerolls = (weaponType == '4') ? 4 : 3;
	do {
		// roll first mod
			modArray = mods.slice();
			randomIndex = Math.floor(Math.random() * modArray.length);
			randomMods = modArray.splice(randomIndex, 1);
		// remove mods of same type
			if (randomMods[0][2] != 0) {
				modArray = modArray.filter(function(e) {return e[2] != randomMods[0][2]});
			}
		// roll second mod
			randomIndex = Math.floor(Math.random() * modArray.length);
			randomMods.push(modArray[randomIndex]);
		// reroll if piercing needed
			for (i=0; i < rerolls; i++) {
				if (needsPiercing && !randomMods[0][3] && !randomMods[1][3] && piercingAmmo) {
					modArray = mods.slice();
					// remove mods of same type
						if (randomMods[(i+1)%2][2] != 0) {
							modArray = modArray.filter(function(e) {return e[2] != randomMods[(i+1)%2][2]});
						} else {
							for (j=0; j < modArray.length; j++) {
								if (randomMods[(i+1)%2][0] == modArray[j][0]) {
									modArray.splice(j, 1);
									break;
								}
							}
						}
					// roll mod
						randomIndex = Math.floor(Math.random() * modArray.length);
						randomMods[i%2] = modArray[randomIndex];
				} else break;
			}
	} while ((randomMods[0][0] === sessionStorage.getItem('weapon' + slot + 'mod1') && randomMods[1][0] === sessionStorage.getItem('weapon' + slot + 'mod2')) || (randomMods[0][0] === sessionStorage.getItem('weapon' + slot + 'mod2') && randomMods[1][0] === sessionStorage.getItem('weapon' + slot + 'mod1')));
	return randomMods;
}

function rollWeaponMods(slot) {
	var weaponType = sessionStorage.getItem('weaponType' + slot);
	var canPierce = sessionStorage.getItem('canPierce' + slot) === 'true';
	var stblAmmo = sessionStorage.getItem('stblAmmo' + slot) === 'true';
	var needsPiercing = sessionStorage.getItem('needsPiercing' + slot) === 'true';
	var mods = getWeaponMods(slot, weaponType, canPierce, stblAmmo, needsPiercing);
	sessionStorage.setItem('mods', true);
	sessionStorage.setItem('weapon' + slot + 'mod1', mods[0][0]);
	sessionStorage.setItem('weapon' + slot + 'mod2', mods[1][0]);
	document.getElementById('weapon' + slot + 'mod1').innerHTML = mods[0][0];
	document.getElementById('weapon' + slot + 'mod1Pic').src = 'resources/Mods/' + mods[0][1] + '.png';
	document.getElementById('weapon' + slot + 'mod2').innerHTML = mods[1][0];
	document.getElementById('weapon' + slot + 'mod2Pic').src = 'resources/Mods/' + mods[1][1] + '.png';
}

function getRandomAmmo(canPierce) {
	var ammo = new Array('Cryo Rounds', 'Disrupter Rounds', 'Incendiary Rounds', 'Phasic Rounds', 'Warp Rounds');
	if (canPierce || !document.getElementById('chkUselessAmmo').checked) ammo.push('Armor-Piercing Rounds', 'Drill Rounds');
	if (!document.getElementById('chkExplosive').checked) ammo.push('Explosive Rounds');
	var randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * ammo.length);
	} while (ammo[randomIndex] === sessionStorage.getItem('ammo'));
	return ammo[randomIndex];
}

function rollRandomAmmo() {
	var canPierce = sessionStorage.getItem('canPierce1') === 'true' || sessionStorage.getItem('canPierce2') === 'true' || sessionStorage.getItem('canPierce1') === null;
	var ammo = getRandomAmmo(canPierce);
	sessionStorage.setItem('ammo', ammo);
	document.getElementById('ammoOutput1').innerHTML = 'Ammo Bonus:';
	document.getElementById('ammoOutput2').innerHTML = ammo;
	document.getElementById('ammoPic').src = 'resources/Ammo/' + ammo.replace(/[\s\-]/gi, '') + '.png';	
}

function getRandomArmor() {
	var armor = new Array('Adrenaline Module', 'Cyclonic Modulator', 'Power Amplifier Module', 'Power Efficiency Module', 'Shield Power Cells', 'Stabilization Module');
	var randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * armor.length);
	} while (armor[randomIndex] === sessionStorage.getItem('armor'));
	return armor[randomIndex];
}

function rollRandomArmor() {
	var armor = getRandomArmor();
	sessionStorage.setItem('armor', armor);
	document.getElementById('armorOutput1').innerHTML = 'Armor Bonus:';
	document.getElementById('armorOutput2').innerHTML = armor;
	document.getElementById('armorPic').src = 'resources/Armor/' + armor.replace(/[\s]/gi, '') + '.png';
}

function getRandomWeaponBonus(weaponType1, weaponType2, canHeadshot) {
	var weaponBonus = new Array('Strength Enhancer');
	if (document.getElementById('chkUselessWeaponBonus').checked && weaponType1 != null) {
		if (weaponType1 == '1' || weaponType2 == '1') weaponBonus.push('Assault Rifle Rail Amp');
		if (weaponType1 == '2' || weaponType2 == '2') weaponBonus.push('Pistol Rail Amp');
		if (weaponType1 == '3' || weaponType2 == '3') weaponBonus.push('Shotgun Rail Amp');
		if (weaponType1 == '4' || weaponType2 == '4') weaponBonus.push('SMG Rail Amp');
		if (weaponType1 == '5' || weaponType2 == '5') weaponBonus.push('Sniper Rifle Rail Amp');
		if (canHeadshot) weaponBonus.push('Targeting VI');
	} else {
		weaponBonus.push('Targeting VI', 'Assault Rifle Rail Amp', 'Pistol Rail Amp', 'Shotgun Rail Amp', 'SMG Rail Amp', 'Sniper Rifle Rail Amp');
	}
	var randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * weaponBonus.length);
		if ((weaponBonus[randomIndex] == 'Strength Enhancer' || weaponBonus[randomIndex] == 'Targeting VI') && document.getElementById('chkUselessWeaponBonus').checked && weaponType1 != null) randomIndex = Math.floor(Math.random() * weaponBonus.length);
	} while (weaponBonus[randomIndex] === sessionStorage.getItem('weaponBonus'));
	return weaponBonus[randomIndex];
}

function rollRandomWeaponBonus() {
	var weaponType1 = sessionStorage.getItem('weaponType1');
	var weaponType2 = sessionStorage.getItem('weaponType2');
	var canHeadshot = sessionStorage.getItem('canHeadshot1') === 'true' || sessionStorage.getItem('canHeadshot2') === 'true';
	var weaponBonus = getRandomWeaponBonus(weaponType1, weaponType2, canHeadshot);
	sessionStorage.setItem('weaponBonus', weaponBonus);
	document.getElementById('weaponBonusOutput1').innerHTML = 'Weapon Bonus:';
	document.getElementById('weaponBonusOutput2').innerHTML = weaponBonus;
	document.getElementById('weaponBonusPic').src = 'resources/WeaponBonus/' + weaponBonus.replace(/[\s]/gi, '') + '.png';
}

function getRandomGear(hasBiotics, hasTech, hasGrenades, weaponType1, weaponType2, canHeadshot) {
	var gear = new Array('Densified Ammunition', 'Hydraulic Joints', 'Mental Focuser', 'Multicapacitor', 'Shield Booster', 'Structural Ergonomics', 'Thermal Clip Storage', 'Armored Compartments', 'Assault Loadout', 'Barrage Upgrade', 'Batarian Gauntlet', 'Berserker Package', 'Expert Package', 'Geth Scanner', 'Juggernaut Shield', 'Martial Biotic Amp', 'Medi-Gel Transmitter', 'Omni-Capacitors', 'Responder Loadout', 'Stronghold Package', 'Survivor Loadout');
	if (document.getElementById('chkUselessGear').checked) {
		if (hasBiotics) gear.push('Adaptive War Amp');
		if (hasTech) gear.push('Engineering Kit');
		if (hasGrenades) gear.push('Grenade Capacity');
		if (weaponType1 !== null) {
			if (weaponType1 == '1' || weaponType2 == '1') gear.push('Assault Rifle Amp');
			if (weaponType1 == '2' || weaponType2 == '2') gear.push('Pistol Amp');
			if (weaponType1 == '3' || weaponType2 == '3') gear.push('Shotgun Amp');
			if (weaponType1 == '4' || weaponType2 == '4') gear.push('SMG Amp');
			if (weaponType1 == '5' || weaponType2 == '5') gear.push('Sniper Rifle Amp');
			if (hasBiotics || weaponType1 == '2' || weaponType2 == '2') gear.push('Commando Package');
			if (hasTech || weaponType1 == '5' || weaponType2 == '5') gear.push('Operative Package');
			if (hasGrenades || weaponType1 == '1' || weaponType2 == '1') gear.push('Warfighter Package');
			if (hasGrenades || weaponType1 == '3' || weaponType2 == '3') gear.push('Shock Trooper Upgrade');
			if (weaponType1 == '1' || weaponType2 == '1' || weaponType1 == '2' || weaponType2 == '2') gear.push('Combatives Upgrade');
			if (weaponType1 == '4' || weaponType2 == '4' || weaponType1 == '5' || weaponType2 == '5') gear.push('Guerrilla Upgrade');
			if (canHeadshot) gear.push('Vulnerability VI');
		} else {
			gear.push('Assault Rifle Amp', 'Combatives Upgrade', 'Commando Package', 'Guerrilla Upgrade', 'Operative Package', 'Pistol Amp', 'Shock Trooper Upgrade', 'Shotgun Amp', 'SMG Amp', 'Sniper Rifle Amp', 'Vulnerability VI', 'Warfighter Package');
		}
	} else {
		gear.push('Adaptive War Amp', 'Assault Rifle Amp', 'Combatives Upgrade', 'Commando Package', 'Engineering Kit', 'Grenade Capacity', 'Guerrilla Upgrade', 'Operative Package', 'Pistol Amp', 'Shock Trooper Upgrade', 'Shotgun Amp', 'SMG Amp', 'Sniper Rifle Amp', 'Vulnerability VI', 'Warfighter Package');
	}
	var randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * gear.length);
		if (hasGrenades) {
			for (var i=0; i<2; i++) {
				if (gear[randomIndex] != 'Grenade Capacity' && gear[randomIndex] != 'Shock Trooper Upgrade' && gear[randomIndex] != 'Warfighter Package') randomIndex = Math.floor(Math.random() * gear.length);
			}
		}
	} while (gear[randomIndex] === sessionStorage.getItem('gear'));
	return gear[randomIndex];
}

function rollRandomGear() {
	var hasBiotics = sessionStorage.getItem('hasBiotics') === 'true';
	var hasTech = sessionStorage.getItem('hasTech') === 'true';
	var hasGrenades = sessionStorage.getItem('hasGrenades') === 'true';
	var weaponType1 = sessionStorage.getItem('weaponType1');
	var weaponType2 = sessionStorage.getItem('weaponType2');
	var canHeadshot = sessionStorage.getItem('canHeadshot1') === 'true' || sessionStorage.getItem('canHeadshot2') === 'true';
	var gear = getRandomGear(hasBiotics, hasTech, hasGrenades, weaponType1, weaponType2, canHeadshot);
	sessionStorage.setItem('gear', gear);
	document.getElementById('GearOutput1').innerHTML = 'Gear Bonus:';
	document.getElementById('GearOutput2').innerHTML = gear;
	document.getElementById('gearPic').src = 'resources/Gear/' + gear.replace(/[\s\-]/gi, '') + '.png';
}

function rollKit() {
	sessionStorage.removeItem('prevCharacterName');
	if (sessionStorage.getItem('characterName') !== null) sessionStorage.setItem('prevCharacterName', sessionStorage.getItem('characterName'));
	sessionStorage.removeItem('characterName');
	sessionStorage.removeItem('powers');
	sessionStorage.removeItem('weaponType1');
	sessionStorage.removeItem('weaponType2');
	sessionStorage.removeItem('prevWeaponName1');
	sessionStorage.removeItem('prevWeaponName2');
	if (sessionStorage.getItem('weaponName1') !== null) sessionStorage.setItem('prevWeaponName1', sessionStorage.getItem('weaponName1'));
	if (sessionStorage.getItem('weaponName2') !== null) sessionStorage.setItem('prevWeaponName2', sessionStorage.getItem('weaponName2'));
	sessionStorage.removeItem('weaponName1');
	sessionStorage.removeItem('weaponName2');
	sessionStorage.removeItem('weight1');
	sessionStorage.removeItem('weight2');
	sessionStorage.removeItem('canPierce1');
	sessionStorage.removeItem('canPierce2');
	sessionStorage.removeItem('stblAmmo1');
	sessionStorage.removeItem('stblAmmo2');
	sessionStorage.removeItem('canHeadshot1');
	sessionStorage.removeItem('canHeadshot2');
	sessionStorage.removeItem('needsPiercing1');
	sessionStorage.removeItem('needsPiercing2');
	sessionStorage.removeItem('mods');
	sessionStorage.removeItem('weapon1mod1');
	sessionStorage.removeItem('weapon1mod2');
	sessionStorage.removeItem('weapon2mod1');
	sessionStorage.removeItem('weapon2mod2');
	sessionStorage.removeItem('ammo');
	sessionStorage.removeItem('armor');
	sessionStorage.removeItem('weaponBonus');
	sessionStorage.removeItem('gear');
	
	rollCharacter();
	if (document.getElementById('chkRandPowers').checked) {
		rollPowers(false);
	} else {
		for (var i=1; i<6; i++) {
			document.getElementById('power' + i + 'name').innerHTML = '';
			for (var j=1; j<7; j++) {
				document.getElementById('power' + i + 'rank' + j).src = '';
			}
		}
	}
	// roll weapon
	if (document.getElementById('chkRandWeapon').checked) {
		rollWeaponCount();
		rollWeapon(1);
		// check 2nd weapon
		if (sessionStorage.getItem('weaponCount') === '1') {
			rollWeapon(2);
		} else {
			document.getElementById('weaponoutput2').innerHTML = '';
			document.getElementById('weaponPic2').src = '';
		}
	} else {
		document.getElementById('weaponoutput1').innerHTML = '';
		document.getElementById('weaponPic1').src = '';
		document.getElementById('weaponoutput2').innerHTML = '';
		document.getElementById('weaponPic2').src = '';
	}
	// roll ammo bonus
	if (document.getElementById('chkRandAmmo').checked) {
		rollRandomAmmo();
	} else {
		document.getElementById('ammoOutput1').innerHTML = '';
		document.getElementById('ammoOutput2').innerHTML = '';
		document.getElementById('ammoPic').src = '';
	}
	// get armor bonus
	if (document.getElementById('chkRandArmor').checked) {
		rollRandomArmor();
	} else {
		document.getElementById('armorOutput1').innerHTML = '';
		document.getElementById('armorOutput2').innerHTML = '';
		document.getElementById('armorPic').src = '';
	}
	// get weapon bonus
	if (document.getElementById('chkRandWeaponBonus').checked) {
		rollRandomWeaponBonus();
	} else {
		document.getElementById('weaponBonusOutput1').innerHTML = '';
		document.getElementById('weaponBonusOutput2').innerHTML = '';
		document.getElementById('weaponBonusPic').src = '';
	}
	// get gear bonus
	if (document.getElementById('chkRandGear').checked) {
		rollRandomGear();
	} else {
		document.getElementById('GearOutput1').innerHTML = '';
		document.getElementById('GearOutput2').innerHTML = '';
		document.getElementById('gearPic').src = '';
	}
	// roll mods
	if (document.getElementById('chkRandWeapon').checked && document.getElementById('chkRandMods').checked) {
		rollWeaponMods(1);
		// check 2nd weapon
		if (sessionStorage.getItem('weaponCount') === '1') {
			rollWeaponMods(2);
		} else {
			document.getElementById('weapon2mod1').innerHTML = '';
			document.getElementById('weapon2mod1Pic').src = '';
			document.getElementById('weapon2mod2').innerHTML = '';
			document.getElementById('weapon2mod2Pic').src = '';
		}
	} else {
		document.getElementById('weapon1mod1').innerHTML = '';
		document.getElementById('weapon1mod1Pic').src = '';
		document.getElementById('weapon1mod2').innerHTML = '';
		document.getElementById('weapon1mod2Pic').src = '';
		document.getElementById('weapon2mod1').innerHTML = '';
		document.getElementById('weapon2mod1Pic').src = '';
		document.getElementById('weapon2mod2').innerHTML = '';
		document.getElementById('weapon2mod2Pic').src = '';
	}
}

function localLoad() {
	var checkboxes = document.querySelectorAll('input[type=checkbox]');
	for (i=0; i < checkboxes.length; i++) {
		if (localStorage.getItem(checkboxes[i].id) !== null) {
			checkboxes[i].checked = localStorage.getItem(checkboxes[i].id) === 'true';
		}
	}
	if (localStorage.getItem('chkWeaponCount') !== null) {
		switch(localStorage.getItem('chkWeaponCount')) {
			case 'any':
				document.getElementById('chkWeaponCountAny').checked = true;
				break;
			case '1':
				document.getElementById('chkWeaponCountOne').checked = true;
				break;
			case '2':
				document.getElementById('chkWeaponCountTwo').checked = true;
				break;
		}
	}
}

function storeChkbox(id) {
	localStorage.setItem(id, document.getElementById(id).checked);
}

function storeRadio(id) {
	switch(id) {
		case 'chkWeaponCountAny':
			localStorage.setItem('chkWeaponCount', 'any');
			break;
		case 'chkWeaponCountOne':
			localStorage.setItem('chkWeaponCount', '1');
			break;
		case 'chkWeaponCountTwo':
			localStorage.setItem('chkWeaponCount', '2');
			break;
	}
}

function disableWeapon() {
	var checked = document.getElementById('chkRandWeapon').checked;
	if (checked) {opcty = "1";} else {opcty = "0.2";}
	document.getElementById('chkWeaponCountAny').disabled = !checked;
	document.getElementById('lblWeaponCountAny').style.opacity = opcty;
	document.getElementById('chkWeaponCountOne').disabled = !checked;
	document.getElementById('lblWeaponCountOne').style.opacity = opcty;
	document.getElementById('chkWeaponCountTwo').disabled = !checked;
	document.getElementById('lblWeaponCountTwo').style.opacity = opcty;
	document.getElementById('chkLimitWeight').disabled = !checked;
	document.getElementById('lblLimitWeight').style.opacity = opcty;
	document.getElementById('chkRandMods').disabled = !checked;
	document.getElementById('lblRandMods').style.opacity = opcty;
	if (document.getElementById('chkRandMods').checked) {
		document.getElementById('chkUselessMods').disabled = !checked;
		document.getElementById('lblUselessMods').style.opacity = opcty;
	}
}

function disableMods() {
	var checked = document.getElementById('chkRandWeapon').checked && document.getElementById('chkRandMods').checked;
	if (checked) {opcty = "1";} else {opcty = "0.2";}
	document.getElementById('chkUselessMods').disabled = !checked;
	document.getElementById('lblUselessMods').style.opacity = opcty;
}

function disableAmmo() {
	var checked = document.getElementById('chkRandAmmo').checked;
	if (checked) {opcty = "1";} else {opcty = "0.2";}
	document.getElementById('chkUselessAmmo').disabled = !checked;
	document.getElementById('lblUselessAmmo').style.opacity = opcty;
	document.getElementById('chkExplosive').disabled = !checked;
	document.getElementById('lblExplosive').style.opacity = opcty;
}

function disableWeaponBonus() {
	var checked = document.getElementById('chkRandWeaponBonus').checked;
	if (checked) {opcty = "1";} else {opcty = "0.2";}
	document.getElementById('chkUselessWeaponBonus').disabled = !checked;
	document.getElementById('lblUselessWeaponBonus').style.opacity = opcty;
}

function disableGear() {
	var checked = document.getElementById('chkRandGear').checked;
	if (checked) {opcty = "1";} else {opcty = "0.2";}
	document.getElementById('chkUselessGear').disabled = !checked;
	document.getElementById('lblUselessGear').style.opacity = opcty;
}

window.onload = function(){
	localLoad();
	disableWeapon();
	disableMods();
	disableAmmo();
	disableWeaponBonus();
	disableGear();
}