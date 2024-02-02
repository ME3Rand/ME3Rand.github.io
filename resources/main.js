function getRandomCharacter() {
	// [characterName, characterPng, weightLimit, hasBiotics, hasTech, hasGrenades]
	var charList = new Array();
	charList.push(['Human Adept', 'HumanAdeptSentinel', 250, true, false, false]);
	charList.push(['Asari Adept', 'Asari', 250, true, false, false]);
	charList.push(['Drell Adept', 'Drell', 300, true, false, true]);
	charList.push(['Asari Justicar Adept', 'AsariJusticar', 250, true, false, false]);
	charList.push(['Phoenix Project Adept', 'Phoenix', 250, true, false, false]);
	charList.push(['N7 Fury Adept', 'N7Fury', 250, true, false, false]);
	charList.push(['Volus Adept', 'VolusAdept', 250, true, false, false]);
	charList.push(['Krogan Shaman Adept', 'KroganShaman', 350, true, false, false]);
	charList.push(['Batarian Slasher Adept', 'BatarianSlasher', 300, true, false, true]);
	charList.push(['Awakened Collector Adept', 'Collector', 250, true, false, false]);
	charList.push(['Human Soldier', 'HumanSoldierVanguard', 300, false, false, true]);
	charList.push(['Krogan Soldier', 'Krogan', 350, false, false, true]);
	charList.push(['Turian Soldier', 'Turian', 300, false, false, false]);
	charList.push(['Battlefield 3 Soldier', 'BF3', 300, false, false, true]);
	charList.push(['Batarian Soldier', 'Batarian', 300, false, false, true]);
	charList.push(['Vorcha Soldier', 'Vorcha', 300, false, true, false]);
	charList.push(['N7 Destroyer Soldier', 'N7Destroyer', 500, false, false, true]);
	charList.push(['Turian Havoc Soldier', 'TurianHavoc', 300, false, true, true]);
	charList.push(['Geth Trooper Soldier', 'GethTrooper', 300, false, true, false]);
	charList.push(['Quarian Marksman Soldier', 'QuarianMarksman', 300, false, true, false]);
	charList.push(['Geth Juggernaut Soldier', 'GethJuggernaut', 350, false, true, false]);
	charList.push(['Human Engineer', 'HumanEngineerInfiltrator', 250, false, true, false]);
	charList.push(['Quarian Female Engineer', 'Quarian', 250, false, true, false]);
	charList.push(['Salarian Engineer', 'Salarian', 300, false, true, false]);
	charList.push(['Geth Engineer', 'GethEngineer', 300, false, true, false]);
	charList.push(['Quarian Male Engineer', 'QuarianMale', 300, false, true, true]);
	charList.push(['N7 Demolisher Engineer', 'N7Demolisher', 500, false, true, true]);
	charList.push(['Volus Engineer', 'VolusEngineer', 250, false, false, false]);
	charList.push(['Turian Saboteur Engineer', 'TurianSaboteur', 300, false, true, true]);
	charList.push(['Vorcha Hunter Engineer', 'VorchaHunter', 250, false, true, false]);
	if (!document.getElementById('chkTalonEngineer').checked) charList.push(['Talon Mercenary Engineer', 'TalonMercenary', 500, false, false, true]);
	charList.push(['Human Sentinel', 'HumanAdeptSentinel', 300, true, true, false]);
	charList.push(['Turian Sentinel', 'Turian', 300, true, true, false]);
	charList.push(['Krogan Sentinel', 'Krogan', 350, true, true, true]);
	charList.push(['Batarian Sentinel', 'Batarian', 300, true, true, false]);
	charList.push(['Vorcha Sentinel', 'Vorcha', 300, true, true, true]);
	charList.push(['N7 Paladin Sentinel', 'N7Paladin', 300, false, true, false]);
	charList.push(['Volus Mercenary Sentinel', 'VolusMercenary', 250, false, true, false]);
	charList.push(['Asari Valkyrie Sentinel', 'AsariValkyrie', 300, true, true, false]);
	charList.push(['Krogan Warlord Sentinel', 'KroganWarlord', 350, true, true, false]);
	charList.push(['Human Infiltrator', 'HumanEngineerInfiltrator', 350, false, false, true]);
	charList.push(['Salarian Infiltrator', 'Salarian', 350, false, true, false]);
	charList.push(['Quarian Female Infiltrator', 'Quarian', 350, false, true, true]);
	charList.push(['Geth Infiltrator', 'GethInfiltrator', 350, false, false, false]);
	charList.push(['Quarian Male Infiltrator', 'QuarianMale', 350, false, true, true]);
	charList.push(['N7 Shadow Infiltrator', 'N7Shadow', 250, false, true, false]);
	charList.push(['Turian Ghost Infiltrator', 'TurianGhost', 350, false, true, true]);
	charList.push(['Drell Assassin Infiltrator', 'DrellAssassin', 300, false, true, true]);
	charList.push(['Asari Huntress Infiltrator', 'AsariHuntress', 300, true, false, false]);
	charList.push(['Alliance Infiltration Unit Infiltrator', 'AIU', 350, false, true, true]);
	charList.push(['Human Vanguard', 'HumanSoldierVanguard', 250, true, false, false]);
	charList.push(['Drell Vanguard', 'Drell', 300, true, false, true]);
	charList.push(['Asari Vanguard', 'Asari', 300, true, false, true]);
	charList.push(['Krogan Vanguard', 'KroganBattlemaster', 350, true, false, false]);
	charList.push(['Phoenix Project Vanguard', 'Phoenix', 250, true, false, false]);
	charList.push(['N7 Slayer Vanguard', 'N7Slayer', 250, true, false, false]);
	charList.push(['Volus Protector Vanguard', 'VolusProtector', 250, true, false, false]);
	charList.push(['Batarian Brawler Vanguard', 'BatarianBrawler', 300, true, false, false]);
	charList.push(['Cabal Vanguard', 'Cabal', 300, true, false, true]);
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
	switch (character) {
		case 'Human Adept':
			var powers = [['Singularity', 'Singularity', 'Recharge Speed', 'Damage', 'Duration', 'Radius', 'Lift Damage', 'Recharge Speed', 'Damage', 'Detonate', 40, 50, 50],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 30, 40, 60],
						  ['Shockwave', 'Shockwave', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Detonate', 'Reach', 'Recharge Speed', 'Lifting Shockwave', 100, 70, 50],
						  ['MPPassive', 'Alliance Training', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 30, 30]];
			break;
		case 'Asari Adept':
			var powers = [['Stasis', 'Stasis', 'Recharge Speed', 'Duration', 'Duration', 'Stasis Strength', 'Bonus Power', 'Recharge Speed', 'Bubble', 'Vulnerability', 50, 40, 70],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 30, 40, 60],
						  ['Throw', 'Throw', 'Recharge Speed', 'Force', 'Force', 'Radius', 'Detonate', 'Recharge Combo', 'Force & Damage', 'Recharge Speed', 40, 70, 50],
						  ['MPPassive', 'Asari Justicar', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Pistols', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Drell Adept':
			var powers = [['Reave', 'Reave', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Damage Reduction', 'Recharge Speed', 'Barriers & Armor', 'Damage & Duration', 30, 60, 30],
						  ['Pull', 'Pull', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Lift Damage', 'Expose', 'Duration & Combo', 'Recharge Speed', 40, 50, 60],
						  ['ClusterGrenade', 'Cluster Grenade', 'Max Grenades', 'Force & Damage', 'Force & Damage', 'Radius', 'Max Grenades', 'Damage Combo', 'Shrapnel', 'Force & Damage', 50, 30, 60],
						  ['MPPassive', 'Drell Assassin', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Asari Justicar Adept':
			var powers = [['BioticSphere', 'Biotic Sphere', 'Recharge Speed', 'Duration', 'Shield Regeneration', 'Radius', 'Damage Reduction', 'Enemy Weakness', 'Allied Protection', 'Warp Effect', 40, 40, 30],
						  ['Reave', 'Reave', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Damage Reduction', 'Recharge Speed', 'Barriers & Armor', 'Damage & Duration', 30, 60, 40],
						  ['Pull', 'Pull', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Lift Damage', 'Expose', 'Duration & Combo', 'Recharge Speed', 40, 50, 60],
						  ['MPPassive', 'Asari Justicar', 'Weapon Damage', 'Power Duration', 'Weapon Damage', 'Duration & Capacity', 'Power Damage', 'Headshots', 'Assault Rifles', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Phoenix Project Adept':
			var powers = [['Singularity', 'Singularity', 'Recharge Speed', 'Damage', 'Duration', 'Radius', 'Lift Damage', 'Recharge Speed', 'Damage', 'Detonate', 40, 50, 40],
						  ['Smash', 'Smash', 'Recharge Speed', 'Force & Damage', 'Biotic Combo', 'Electrical Damage', 'Force & Damage', 'Recharge Speed', 'Armor Damage', 'Impact Radius', 60, 50, 60],
						  ['Lash', 'Lash', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Recharge Speed', 'Damage Over Time', 'Fast Recharge', 'Shield Penetration', 30, 50, 30],
						  ['MPPassive', 'Phoenix Training', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Pistols & Shotguns', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 30, 30, 40]];
			break;
		case 'N7 Fury Adept':
			var powers = [['AnnihilationField', 'Annihilation Field', 'Recharge Speed', 'Damage', 'Damage', 'Impact Radius', 'Damage Taken', 'Movement Speed', 'Damage', 'Drain', 40, 50, 30],
						  ['DarkChannel', 'Dark Channel', 'Recharge Speed', 'Damage', 'Damage', 'Duration', 'Slow', 'Recharge Speed', 'Damage', 'Pierce', 60, 40, 40],
						  ['Throw', 'Throw', 'Recharge Speed', 'Force', 'Force', 'Radius', 'Detonate', 'Recharge Combo', 'Force & Damage', 'Recharge Speed', 40, 70, 50],
						  ['MPPassive', 'N7 Fury', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Volus Adept':
			var powers = [['Stasis', 'Stasis', 'Recharge Speed', 'Duration', 'Duration', 'Stasis Strength', 'Bonus Power', 'Recharge Speed', 'Bubble', 'Vulnerability', 50, 40, 70],
						  ['BioticOrbs', 'Biotic Orbs', 'Recharge Speed', 'Damage', 'Damage', 'Impact Radius', 'Damage', 'Recharge Speed', 'Expose', 'Orb Count', 50, 40, 50],
						  ['ShieldBoost', 'Shield Boost', 'Recharge Speed', 'Shields', 'Impact Radius', 'Shields', 'Recharge Speed', 'Regeneration', 'Duration', 'Protection', 50, 50, 40],
						  ['MPPassive', 'Volus Training', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Shield Boost', 'Weapon Weight', 'Weapon Damage', 50, 50, 30],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Krogan Shaman Adept':
			var powers = [['Barrier', 'Barrier', 'Recharge', 'Blast Effect', 'Blast Effect', 'Barrier Strength', 'Shield Recharge', 'Power Synergy', 'Power Recharge', 'Barrier Strength', 30, 50, 50],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 30, 40, 60],
						  ['Shockwave', 'Shockwave', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Detonate', 'Reach', 'Recharge Speed', 'Lifting Shockwave', 100, 70, 50],
						  ['MPPassive', 'Krogan Berserker', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns', 'Weapon Damage', 50, 50, 20],
						  ['MPFitness', 'Rage', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Pure Rage', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Batarian Slasher Adept':
			var powers = [['Lash', 'Lash', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Recharge Speed', 'Damage Over Time', 'Fast Recharge', 'Shield Penetration', 30, 50, 30],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 30, 40, 50],
						  ['ClusterGrenade', 'Cluster Grenade', 'Max Grenades', 'Force & Damage', 'Force & Damage', 'Radius', 'Max Grenades', 'Damage Combo', 'Shrapnel', 'Force & Damage', 50, 30, 50],
						  ['MPPassive', 'Batarian Enforcer', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Snipers & Shotguns', 'Damage & Ammo', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Awakened Collector Adept':
			var powers = [['DarkSphere', 'Dark Sphere', 'Recharge Speed', 'Damage', 'Damage', 'Detonation Radius', 'Damage Over Time', 'Recharge Speed', 'Dark Matter', 'Unstable Dark Sphere', 50, 5, 50],
						  ['SeekerSwarm', 'Seeker Swarm', 'Recharge Speed', 'Damage', 'Recharge Speed', 'Slow', 'Damage Reduction', 'Damage', 'Swarm Count', 'Damage & Slow', 70, 70, 70],
						  ['DarkChannel', 'Dark Channel', 'Recharge Speed', 'Damage', 'Damage', 'Duration', 'Slow', 'Recharge Speed', 'Damage', 'Pierce', 60, 40, 40],
						  ['MPPassive', 'Vengeful Ancient', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Power Damage', 'Collector/Prothean Weapon Damage', 50, 60, 50],
						  ['MPFitness','Ancient Warrior', 'Durability', 'Melee Damage', 'Ascension Damage Bonus', 'Durability', 'Ascension Recharge Speed', 'Shield Recharge', 'Ascension Mastery', 'Fitness Expert',  30, 50, 30]];
			break;
		case 'Human Soldier':
			var powers = [['AdrenalineRush', 'Adrenaline Rush', 'Recharge Speed', 'Duration', 'Hardening', 'Damage', 'Duration', 'Melee Damage', 'Shield Boost', 'Power Use', 50, 30, 60],
						  ['ConcussiveShot', 'Concussive Shot', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Shatter', 'Recharge Speed', 'Hammer', 'Shredder', 50, 60, 40],
						  ['FragGrenade', 'Frag Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Bleed Damage', 'Armor-Piercing', 'Shield Overload', 50, 50, 60],
						  ['MPPassive', 'Alliance Training', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 30, 30]];
			break;
		case 'Krogan Soldier':
			var powers = [['Fortification', 'Fortification', 'Recharge Speed', 'Melee Damage', 'Durability', 'Melee Damage', 'Recharge Speed', 'Power Synergy', 'Power Recharge', 'Durability', 50, 40, 50],
						  ['Carnage', 'Carnage', 'Recharge Speed', 'Damage', 'Radius', 'Damage', 'Incapacitate', 'Recharge Speed', 'Armor Damage', 'Damage', 50, 40, 50],
						  ['InfernoGrenade', 'Inferno Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Damage', 'Armor Damage', 'Radius & Shrapnel', 50, 50, 70],
						  ['MPPassive', 'Krogan Berserker', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Rage', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Pure Rage', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Turian Soldier':
			var powers = [['Marksman', 'Marksman', 'Recharge Speed', 'Duration', 'Accuracy', 'Firing Rate', 'Duration', 'Headshots', 'Accuracy & Firing Rate', 'Recharge Speed', 50, 50, 70],
						  ['ConcussiveShot', 'Concussive Shot', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Shatter', 'Recharge Speed', 'Hammer', 'Shredder', 50, 60, 40],
						  ['ProximityMine', 'Proximity Mine', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Damage Taken', 'Slow', 'Damage', 'Recharge Speed', 40, 70, 50],
						  ['MPPassive', 'Turian Veteran', 'Weapon Stability', 'Weapon Damage', 'Damage & Stability', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Assault Rifles', 'Damage & Stability', 60, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Battlefield 3 Soldier':
			var powers = [['AdrenalineRush', 'Adrenaline Rush', 'Recharge Speed', 'Duration', 'Hardening', 'Damage', 'Duration', 'Melee Damage', 'Shield Boost', 'Power Use', 50, 30, 60],
						  ['Carnage', 'Carnage', 'Recharge Speed', 'Damage', 'Radius', 'Damage', 'Incapacitate', 'Recharge Speed', 'Armor Damage', 'Damage', 50, 40, 50],
						  ['FragGrenade', 'Frag Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Bleed Damage', 'Armor-Piercing', 'Shield Overload', 50, 50, 60],
						  ['MPPassive', 'Alliance Training', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 30, 30]];
			break;
		case 'Batarian Soldier':
			var powers = [['BallisticBlades', 'Ballistic Blades', 'Recharge Speed', 'Damage', 'Damage', 'Cone Spread', 'Range', 'Recharge Speed', 'Damage & Bleed', 'Explosive Blades', 50, 60, 50],
						  ['BladeArmor', 'Blade Armor', 'Recharge Speed', 'Melee Damage', 'Durability', 'Melee Damage', 'Recharge Speed', 'Damage Returned', 'Power Recharge', 'Durability', 50, 50, 50],
						  ['InfernoGrenade', 'Inferno Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Damage', 'Armor Damage', 'Radius & Shrapnel', 50, 50, 70],
						  ['MPPassive', 'Batarian Enforcer', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Snipers & Shotguns', 'Damage & Ammo', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Vorcha Soldier':
			var powers = [['Bloodlust', 'Bloodlust', 'Recharge Speed', 'Health Regeneration', 'Melee Damage', 'Health Regeneration', 'Power Damage', 'Weapon Damage', 'Movement & Melee', 'Health Regeneration', 30, 50, 30],
						  ['Flamer', 'Flamer', 'Recharge Speed', 'Damage', 'Damage', 'Reach', 'Damage', 'Duration', 'Armor Damage', 'Shield Damage', 40, 60, 50],
						  ['Carnage', 'Carnage', 'Recharge Speed', 'Damage', 'Radius', 'Damage', 'Incapacitate', 'Recharge Speed', 'Armor Damage', 'Damage', 50, 40, 50],
						  ['MPPassive', 'Vorcha Resilience', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns & Assault Rifles', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 40, 40]];
			break;
		case 'N7 Destroyer Soldier':
			var powers = [['DevastatorMode', 'Devastator Mode', 'Magazine Size', 'Damage Bonus', 'Shield Recharge Delay', 'Weapon Accuracy', 'Magazine Size', 'Rate of Fire', 'Max Shields', 'Damage Bonus', 40, 50, 50],
						  ['MissileLauncher', 'Hawk Missile Launcher', 'Refire Time', 'Missile Damage', 'Shield Penalty', 'Damage & Force', 'Refire Time', 'Armor Damage', 'Hydra Missiles', 'Cobra Missiles', 60, 50, 60],
						  ['MultiFragGrenade', 'Multi-Frag Grenade', 'Max Grenades', 'Force & Damage', 'Force & Damage', 'Radius', 'Max Grenades', 'Force & Damage', 'Grenade Count', 'Force & Damage', 50, 50, 50],
						  ['MPPassive', 'T5-V Battlesuit', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 60, 50, 20],
						  ['MPFitness', 'T5-V Internal Systems', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Turian Havoc Soldier':
			var powers = [['HavocStrike', 'Havoc Strike', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Recharge Speed', 'Weapon Synergy', 'Melee Damage', 'Force & Damage', 'Incendiary Strike', 60, 50, 40],
						  ['StimPack', 'Stimulant Pack', 'Pack Capacity', 'Damage', 'Damage', 'Max Shields', 'Pack Capacity', 'Duration', 'Weapon Damage', 'Survival', 50, 50, 50],
						  ['CryoBlast', 'Cryo Blast', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Speed Reduction', 'Cryo Explosion', 'Recharge Speed', 'Frozen Vulnerability', 40, 30, 30],
						  ['MPPassive', 'Armiger Legion', 'Weapon Stability', 'Weapon Damage', 'Damage & Stability', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Assault Rifles', 'Damage & Stability', 50, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Geth Trooper Soldier':
			var powers = [['Flamer', 'Flamer', 'Recharge Speed', 'Damage', 'Damage', 'Reach', 'Damage', 'Duration', 'Armor Damage', 'Shield Damage', 40, 60, 50],
						  ['Fortification', 'Fortification', 'Recharge Speed', 'Melee Damage', 'Durability', 'Melee Damage', 'Recharge Speed', 'Power Synergy', 'Power Recharge', 'Durability', 50, 40, 50],
						  ['HunterMode', 'Hunter Mode', 'Movement Speed', 'Damage', 'Power Recharge', 'Weapon Accuracy', 'Power Damage', 'Rate of Fire', 'Speed & Vision', 'Damage', 50, 50, 50],
						  ['MPPassive', 'Networked AI', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Sniper & Assault Rifles', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Advanced Hardware', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 30, 30, 40]];
			break;
		case 'Quarian Marksman Soldier':
			var powers = [['Marksman', 'Marksman', 'Recharge Speed', 'Duration', 'Accuracy', 'Firing Rate', 'Duration', 'Headshots', 'Accuracy & Firing Rate', 'Recharge Speed', 50, 50, 70],
						  ['TacticalScan', 'Tactical Scan', 'Recharge Speed', 'Duration', 'Weapon Damage', 'Power Damage', 'Headshots', 'Movement Speed', 'Damage', 'Area Scan', 60, 5, 50],
						  ['Sabotage', 'Sabotage', 'Recharge Speed', 'Radius', 'Duration', 'Backfire', 'Explosive Hack', 'Recharge Speed', 'Berserk', 'Tech Vulnerability', 30, 40, 50],
						  ['MPPassive', 'Quarian Defender', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 70, 30, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Geth Juggernaut Soldier':
			var powers = [['HexShield', 'Hex Shield', 'Recharge Speed', 'Shield Strength', 'Pulse', 'Shield Strength', 'Shock', 'Duration', 'Damage Synergy', 'Large Shield', 50, 50, 50],
						  ['SiegePulse', 'Siege Pulse', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Damage Protection', 'Recharge Speed', 'Numbers of Shots', 'Resistance Damage', 50, 50, 50],
						  ['GethTurret', 'Geth Turret', 'Recharge Speed', 'Shields & Damage', 'Shields & Damage', 'Shield Restore', 'Armor Damage', 'Restore Range', 'Flamethrower', 'Restore Frequency', 50, 50, 50],
						  ['MPPassive', 'Geth Juggernaut', 'Weapon Damage', 'Stability & Ammo', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Stability & Ammo', 'Weapon Weight', 'Weapon Damage', 50, 50, 20],
						  ['MPFitness', 'Hardened Platform', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Speed Boost', 'Shield Recharge', 'Squad Command', 'Power Transfer', 40, 50, 50]];
			break;
		case 'Human Engineer':
			var powers = [['CombatDrone', 'Combat Drone', 'Recharge Speed', 'Shields & Damage', 'Shields & Damage', 'Detonate', 'Shock', 'Shields & Damage', 'Rockets', 'Chain Lightning', 50, 50, 30],
						  ['Incinerate', 'Incinerate', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Burning Damage', 'Recharge Speed', 'Freeze Combo', 'Armor Damage', 40, 60, 30],
						  ['Overload', 'Overload', 'Recharge Speed', 'Damage', 'Chain Overload', 'Damage', 'Neural Shock', 'Recharge Speed', 'Chain Overload', 'Shield Damage', 60, 70, 40],
						  ['MPPassive', 'Alliance Training', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Quarian Female Engineer':
			var powers = [['SentryTurret', 'Sentry Turret', 'Recharge Speed', 'Shields & Damage', 'Shields & Damage', 'Shock', 'Cryo Ammo', 'Armor-Piercing Ammo', 'Rockets', 'Flamethrower', 60, 50, 50],
						  ['Incinerate', 'Incinerate', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Burning Damage', 'Recharge Speed', 'Freeze Combo', 'Armor Damage', 50, 60, 60],
						  ['CryoBlast', 'Cryo Blast', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Speed Reduction', 'Cryo Explosion', 'Recharge Speed', 'Frozen Vulnerability', 50, 30, 30],
						  ['MPPassive', 'Quarian Defender', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'SMGs', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Salarian Engineer':
			var powers = [['EnergyDrain', 'Energy Drain', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Drain', 'Recharge Speed', 'Damage', 'Armor Boost', 50, 60, 40],
						  ['Decoy', 'Decoy', 'Recharge Speed', 'Duration', 'Duration', 'Durability', 'Shock', 'Recharge Speed', 'Exploding Decoy', 'Shields & Duration', 50, 60, 60],
						  ['Incinerate', 'Incinerate', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Burning Damage', 'Recharge Speed', 'Freeze Combo', 'Armor Damage', 50, 60, 30],
						  ['MPPassive', 'Salarian Operative', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Sniper Rifles', 'Weapon Damage', 50, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Geth Engineer':
			var powers = [['GethTurret', 'Geth Turret', 'Recharge Speed', 'Shields & Damage', 'Shields & Damage', 'Shield Restore', 'Armor Damage', 'Restore Range', 'Flamethrower', 'Restore Frequency', 40, 40, 50],
						  ['HunterMode', 'Hunter Mode', 'Movement Speed', 'Damage', 'Power Recharge', 'Weapon Accuracy', 'Power Damage', 'Rate of Fire', 'Speed & Vision', 'Damage', 50, 50, 50],
						  ['Overload', 'Overload', 'Recharge Speed', 'Damage', 'Chain Overload', 'Damage', 'Neural Shock', 'Recharge Speed', 'Chain Overload', 'Shield Damage', 60, 70, 40],
						  ['MPPassive', 'Networked AI', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Sniper & Assault Rifles', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Advanced Hardware', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 30, 30]];
			break;
		case 'Quarian Male Engineer':
			var powers = [['TacticalScan', 'Tactical Scan', 'Recharge Speed', 'Duration', 'Weapon Damage', 'Power Damage', 'Headshots', 'Movement Speed', 'Damage', 'Area Scan', 40, 5, 50],
						  ['Incinerate', 'Incinerate', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Burning Damage', 'Recharge Speed', 'Freeze Combo', 'Armor Damage', 50, 60, 30],
						  ['ArcGrenade', 'Arc Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Electrical Damage', 'Armor-Piercing', 'Shield Overload', 50, 30, 40],
						  ['MPPassive', 'Quarian Defender', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'N7 Demolisher Engineer':
			var powers = [['SupplyPylon', 'Supply Pylon', 'Recharge Speed', 'Resupply Frequency', 'Resupply Frequency', 'Radius', 'Weapon Damage', 'Power Damage', 'Extra Grenade', 'Max Shields', 70, 50, 70],
						  ['ArcGrenade', 'Arc Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Electrical Damage', 'Armor-Piercing', 'Shield Overload', 50, 30, 40],
						  ['HomingGrenade', 'Homing Grenade', 'Capacity', 'Damage', 'Damage', 'Impact Radius', 'Capacity', 'Fire Damage', 'Armor Damage', 'Split Grenade', 50, 50, 50],
						  ['MPPassive', 'N7 Demolisher', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Max Grenades', 'Power Damage', 'Headshots', 'Power Damage', 'Weapon Damage & Max Grenades', 50, 60, 50],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Volus Engineer':
			var powers = [['ReconMine', 'Recon Mine', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Damage', 'Recharge Speed', 'Armor Damage', 'Invasive Scan', 50, 50, 40],
						  ['ProximityMine', 'Proximity Mine', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Damage Taken', 'Slow', 'Damage', 'Recharge Speed', 40, 70, 50],
						  ['ShieldBoost', 'Shield Boost', 'Recharge Speed', 'Shields', 'Impact Radius', 'Shields', 'Recharge Speed', 'Regeneration', 'Duration', 'Protection', 50, 50, 40],
						  ['MPPassive', 'Volus Training', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Shield Boost', 'Weapon Weight', 'Weapon Damage', 50, 50, 30],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Turian Saboteur Engineer':
			var powers = [['SentryTurret', 'Sentry Turret', 'Recharge Speed', 'Shields & Damage', 'Shields & Damage', 'Shock', 'Cryo Ammo', 'Armor-Piercing Ammo', 'Rockets', 'Flamethrower', 60, 50, 40],
						  ['Sabotage', 'Sabotage', 'Recharge Speed', 'Radius', 'Duration', 'Backfire', 'Explosive Hack', 'Recharge Speed', 'Berserk', 'Tech Vulnerability', 30, 40, 30],
						  ['HomingGrenade', 'Homing Grenade', 'Capacity', 'Damage', 'Damage', 'Impact Radius', 'Capacity', 'Fire Damage', 'Armor Damage', 'Split Grenade', 50, 50, 50],
						  ['MPPassive', 'Armiger Legion', 'Weapon Stability', 'Weapon Damage', 'Damage & Stability', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Assault Rifles', 'Damage & Stability', 50, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 40, 40]];
			break;
		case 'Vorcha Hunter Engineer':
			var powers = [['SubmissionNet', 'Submission Net', 'Recharge Speed', 'Damage & Duration', 'Damage', 'Incapacitate', 'Damage & Slow', 'Recharge Speed', 'Shield & Barrier', 'Electric Field', 60, 50, 50],
						  ['Incinerate', 'Incinerate', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Burning Damage', 'Recharge Speed', 'Freeze Combo', 'Armor Damage', 50, 60, 30],
						  ['Bloodlust', 'Bloodlust', 'Recharge Speed', 'Health Regeneration', 'Melee Damage', 'Health Regeneration', 'Power Damage', 'Weapon Damage', 'Movement & Melee', 'Health Regeneration', 30, 50, 30],
						  ['MPPassive', 'Vorcha Resilience', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns & Assault Rifles', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 30, 30]];
			break;
		case 'Talon Mercenary Engineer':
			var powers = [['CainMine', 'Cain Trip Mine', 'Grenade Capacity', 'Damage', 'Damage', 'Radius', 'Armor Damage', 'Grenade Capacity', 'Damage', 'Radius', 50, 70, 50],
						  ['ConcussiveArrow', 'Concussive Arrows', 'Grenade Capacity', 'Force & Damage', 'Force & Damage', 'Grenade Capacity', 'Shock', 'Chill', 'Arrow Count', 'Grenade Capacity', 50, 50, 50],
						  ['APArrow', 'Armor-Piercing Arrows', 'Grenade Capacity', 'Damage', 'Damage', 'Grenade Capacity', 'Shred', 'Armor Damage', 'Arrow Count', 'Grenade Capacity', 50, 40, 50],
						  ['MPPassive', 'Elite Mercenary', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Power Damage', 'Power Damage', 'Headshots', 'Charge Regeneration', 'Weapon Damage', 50, 60, 50],
						  ['MPFitness', 'Omni-Bow Mastery', 'Durability', 'Omni-Bow Damage', 'Omni-Bow Damage', 'Durability', 'Killing Spree', 'Shield Recharge', 'Omni-Bow Damage', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Human Sentinel':
			var powers = [['TechArmor', 'Tech Armor', 'Recharge Speed', 'Damage & Radius', 'Damage & Radius', 'Durability', 'Power Damage', 'Melee Damage', 'Power Recharge', 'Durability', 20, 70, 50],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 30, 40, 60],
						  ['Throw', 'Throw', 'Recharge Speed', 'Force', 'Force', 'Radius', 'Detonate', 'Recharge Combo', 'Force & Damage', 'Recharge Speed', 40, 70, 50],
						  ['MPPassive', 'Alliance Training', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 40, 40]];
			break;
		case 'Turian Sentinel':
			var powers = [['TechArmor', 'Tech Armor', 'Recharge Speed', 'Damage & Radius', 'Damage & Radius', 'Durability', 'Power Damage', 'Melee Damage', 'Power Recharge', 'Durability', 20, 70, 50],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 50, 40, 60],
						  ['Overload', 'Overload', 'Recharge Speed', 'Damage', 'Chain Overload', 'Damage', 'Neural Shock', 'Recharge Speed', 'Chain Overload', 'Shield Damage', 60, 70, 40],
						  ['MPPassive', 'Turian Veteran', 'Weapon Stability', 'Weapon Damage', 'Damage & Stability', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Assault Rifles', 'Damage & Stability', 60, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 40, 40]];
			break;
		case 'Krogan Sentinel':
			var powers = [['TechArmor', 'Tech Armor', 'Recharge Speed', 'Damage & Radius', 'Damage & Radius', 'Durability', 'Power Damage', 'Melee Damage', 'Power Recharge', 'Durability', 20, 50, 50],
						  ['Incinerate', 'Incinerate', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Burning Damage', 'Recharge Speed', 'Freeze Combo', 'Armor Damage', 50, 60, 30],
						  ['LiftGrenade', 'Lift Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Duration', 'Slam', 'Damage & Radius', 50, 95, 5],
						  ['MPPassive', 'Krogan Berserker', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Rage', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Pure Rage', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Batarian Sentinel':
			var powers = [['BladeArmor', 'Blade Armor', 'Recharge Speed', 'Melee Damage', 'Durability', 'Melee Damage', 'Recharge Speed', 'Damage Returned', 'Power Recharge', 'Durability', 50, 50, 50],
						  ['Shockwave', 'Shockwave', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Detonate', 'Reach', 'Recharge Speed', 'Lifting Shockwave', 100, 50, 50],
						  ['SubmissionNet', 'Submission Net', 'Recharge Speed', 'Damage & Duration', 'Damage', 'Incapacitate', 'Damage & Slow', 'Recharge Speed', 'Shield & Barrier', 'Electric Field', 60, 50, 50],
						  ['MPPassive', 'Batarian Enforcer', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Snipers & Shotguns', 'Damage & Ammo', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Vorcha Sentinel':
			var powers = [['Bloodlust', 'Bloodlust', 'Recharge Speed', 'Health Regeneration', 'Melee Damage', 'Health Regeneration', 'Power Damage', 'Weapon Damage', 'Movement & Melee', 'Health Regeneration', 30, 50, 30],
						  ['Flamer', 'Flamer', 'Recharge Speed', 'Damage', 'Damage', 'Reach', 'Damage', 'Duration', 'Armor Damage', 'Shield Damage', 40, 60, 50],
						  ['ClusterGrenade', 'Cluster Grenade', 'Max Grenades', 'Force & Damage', 'Force & Damage', 'Radius', 'Max Grenades', 'Damage Combo', 'Shrapnel', 'Force & Damage', 50, 60, 60],
						  ['MPPassive', 'Vorcha Resilience', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns & Assault Rifles', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 40, 40]];
			break;
		case 'N7 Paladin Sentinel':
			var powers = [['EnergyDrain', 'Energy Drain', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Drain', 'Recharge Speed', 'Damage', 'Armor Boost', 50, 60, 40],
						  ['Incinerate', 'Incinerate', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Burning Damage', 'Recharge Speed', 'Freeze Combo', 'Armor Damage', 50, 60, 60],
						  ['SnapFreeze', 'Snap Freeze', 'Recharge Speed', 'Damage', 'Damage', 'Reach', 'Duration & Slow', 'Cryo Explosion', 'Damage & Weakness', 'Tech Combo', 30, 40, 95],
						  ['MPPassive', 'N7 Paladin', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 30],
						  ['MPFitness', 'Shield Mastery', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Shield Durability', 'Shield Recharge', 'Fire Shield', 'Cryo Shield', 50, 40, 70]];
			break;
		case 'Volus Mercenary Sentinel':
			var powers = [['Decoy', 'Decoy', 'Recharge Speed', 'Duration', 'Duration', 'Durability', 'Shock', 'Recharge Speed', 'Exploding Decoy', 'Shields & Duration', 50, 60, 60],
						  ['CombatDrone', 'Combat Drone', 'Recharge Speed', 'Shields & Damage', 'Shields & Damage', 'Detonate', 'Shock', 'Shields & Damage', 'Rockets', 'Chain Lightning', 50, 50, 30],
						  ['ShieldBoost', 'Shield Boost', 'Recharge Speed', 'Shields', 'Impact Radius', 'Shields', 'Recharge Speed', 'Regeneration', 'Duration', 'Protection', 50, 50, 40],
						  ['MPPassive', 'Volus Training', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Shield Boost', 'Weapon Weight', 'Weapon Damage', 50, 50, 30],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 20, 20]];
			break;
		case 'Asari Valkyrie Sentinel':
			var powers = [['TechArmor', 'Tech Armor', 'Recharge Speed', 'Damage & Radius', 'Damage & Radius', 'Durability', 'Power Damage', 'Melee Damage', 'Power Recharge', 'Durability', 20, 70, 50],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 30, 40, 50],
						  ['AnnihilationField', 'Annihilation Field', 'Recharge Speed', 'Damage', 'Damage', 'Impact Radius', 'Damage Taken', 'Movement Speed', 'Damage', 'Drain', 40, 50, 30],
						  ['MPPassive', 'Asari Valkyrie', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Pistols', 'Weapon Damage', 50, 50, 30],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 30, 40, 40]];
			break;
		case 'Krogan Warlord Sentinel':
			var powers = [['TechArmor', 'Tech Armor', 'Recharge Speed', 'Damage & Radius', 'Damage & Radius', 'Durability', 'Power Damage', 'Melee Damage', 'Power Recharge', 'Durability', 20, 40, 40],
						  ['BioticHammer', 'Biotic Hammer', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Recharge Speed', 'Biotic Combo', 'Armor Damage', 'Power Hammer', 'Number of Charges', 70, 30, 40],
						  ['ElectricalHammer', 'Electrical Hammer', 'Recharge Speed', 'Radius', 'Shields & Barrier', 'Radius', 'Fire Damage', 'Chill', 'Radius & Combo', 'Number of Charges', 60, 60, 50],
						  ['MPPassive', 'Krogan Warlord', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns', 'Weapon Damage', 40, 70, 20],
						  ['MPFitness', 'Warlord Rage', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Pure Rage', 'Fitness Expert', 60, 70, 50]];
			break;
		case 'Human Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Sniper Damage', 40, 60, 50],
						  ['CryoBlast', 'Cryo Blast', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Speed Reduction', 'Cryo Explosion', 'Recharge Speed', 'Frozen Vulnerability', 40, 30, 30],
						  ['StickyGrenade', 'Sticky Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Armor-Piercing', 'Damage', 'Proximity Trap', 50, 30, 50],
						  ['MPPassive', 'Alliance Training', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 30, 30]];
			break;
		case 'Salarian Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Sniper Damage', 40, 60, 40],
						  ['ProximityMine', 'Proximity Mine', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Damage Taken', 'Slow', 'Damage', 'Recharge Speed', 40, 70, 50],
						  ['EnergyDrain', 'Energy Drain', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Drain', 'Recharge Speed', 'Damage', 'Armor Boost', 50, 60, 40],
						  ['MPPassive', 'Salarian Operative', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Sniper Rifles', 'Weapon Damage', 60, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 30, 30]];
			break;
		case 'Quarian Female Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Sniper Damage', 40, 60, 50],
						  ['StickyGrenade', 'Sticky Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Armor-Piercing', 'Damage', 'Proximity Trap', 50, 30, 50],
						  ['Sabotage', 'Sabotage', 'Recharge Speed', 'Radius', 'Duration', 'Backfire', 'Explosive Hack', 'Recharge Speed', 'Berserk', 'Tech Vulnerability', 30, 60, 30],
						  ['MPPassive', 'Quarian Defender', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'SMGs', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 30, 30]];
			break;
		case 'Geth Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Sniper Damage', 40, 50, 30],
						  ['ProximityMine', 'Proximity Mine', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Damage Taken', 'Slow', 'Damage', 'Recharge Speed', 40, 70, 50],
						  ['HunterMode', 'Hunter Mode', 'Movement Speed', 'Damage', 'Power Recharge', 'Weapon Accuracy', 'Power Damage', 'Rate of Fire', 'Speed & Vision', 'Damage', 30, 30, 50],
						  ['MPPassive', 'Networked AI', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Sniper & Assault Rifles', 'Weapon Damage', 60, 50, 20],
						  ['MPFitness', 'Advanced Hardware', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 30, 40, 50]];
			break;
		case 'Quarian Male Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Sniper Damage', 40, 60, 40],
						  ['TacticalScan', 'Tactical Scan', 'Recharge Speed', 'Duration', 'Weapon Damage', 'Power Damage', 'Headshots', 'Movement Speed', 'Damage', 'Area Scan', 50, 5, 50],
						  ['ArcGrenade', 'Arc Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Electrical Damage', 'Armor-Piercing', 'Shield Overload', 50, 30, 40],
						  ['MPPassive', 'Quarian Defender', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 30, 30]];
			break;
		case 'N7 Shadow Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Sniper Damage', 60, 30, 70],
						  ['ElectricSlash', 'Electric Slash', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Detonate', 'Recharge Speed', 'Damage', 'Range', 50, 5, 50],
						  ['ShadowStrike', 'Shadow Strike', 'Recharge Speed', 'Damage', 'Damage', 'Damage Protection', 'Electric Damage', 'Recharge Speed', 'Damage', 'Shield Drain', 50, 70, 40],
						  ['MPPassive', 'N7 Shadow', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Sword Mastery', 'Durability', 'Sword Damage', 'Sword Damage', 'Durability', 'Martial Artist', 'Shield Recharge & Speed', 'Shield Damage', 'Armor Damage', 60, 70, 50]];
			break;
		case 'Turian Ghost Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Assault Rifle Damage', 40, 50, 40],
						  ['StimPack', 'Stimulant Pack', 'Pack Capacity', 'Damage', 'Damage', 'Max Shields', 'Pack Capacity', 'Duration', 'Weapon Damage', 'Survival', 50, 50, 50],
						  ['Overload', 'Overload', 'Recharge Speed', 'Damage', 'Chain Overload', 'Damage', 'Neural Shock', 'Recharge Speed', 'Chain Overload', 'Shield Damage', 60, 70, 40],
						  ['MPPassive', 'Armiger Legion', 'Weapon Stability', 'Weapon Damage', 'Damage & Stability', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Assault Rifles', 'Damage & Stability', 50, 50, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 40, 40, 40]];
			break;
		case 'Drell Assassin Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Sniper Damage', 40, 60, 5],
						  ['HomingGrenade', 'Homing Grenade', 'Capacity', 'Damage', 'Damage', 'Impact Radius', 'Capacity', 'Fire Damage', 'Armor Damage', 'Split Grenade', 50, 50, 50],
						  ['ReconMine', 'Recon Mine', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Damage', 'Recharge Speed', 'Armor Damage', 'Invasive Scan', 50, 60, 40],
						  ['MPPassive', 'Drell Assassin', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 20, 30, 30]];
			break;
		case 'Asari Huntress Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Power Damage', 40, 60, 40],
						  ['DarkChannel', 'Dark Channel', 'Recharge Speed', 'Damage', 'Damage', 'Duration', 'Slow', 'Recharge Speed', 'Damage', 'Pierce', 60, 50, 40],
						  ['Warp', 'Warp', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Lasting Damage', 'Expose', 'Pierce', 'Recharge Speed', 30, 40, 60],
						  ['MPPassive', 'Asari Huntress', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Pistols', 'Weapon Damage', 40, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 20, 30, 30]];
			break;
		case 'Alliance Infiltration Unit Infiltrator':
			var powers = [['TacticalCloak', 'Tactical Cloak', 'Recharge Speed', 'Duration', 'Duration', 'Damage', 'Recharge Speed', 'Melee Damage', 'Bonus Power', 'Shotgun Damage', 40, 50, 40],
						  ['SnapFreeze', 'Snap Freeze', 'Recharge Speed', 'Damage', 'Damage', 'Reach', 'Duration & Slow', 'Cryo Explosion', 'Damage & Weakness', 'Tech Combo', 40, 30, 50],
						  ['RepairMatrix', 'Repair Matrix', 'Charge Capacity', 'Shields Restored', 'Survivability', 'Shields Restored', 'Charges Capacity', 'Duration', 'Lasting Repair Matrix', 'Enhanced Repair Matrix', 50, 40, 40],
						  ['MPPassive', 'Unshackled A.I.', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Pistols & Shotguns', 'Weapon Damage', 50, 50, 20],
						  ['MPFitness', 'Fitness Module', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 40, 40, 40]];
			break;
		case 'Human Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Power Synergy', 'Bonus Power', 'Barrier', 30, 40, 30],
						  ['Shockwave', 'Shockwave', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Detonate', 'Reach', 'Recharge Speed', 'Lifting Shockwave', 100, 60, 50],
						  ['Nova', 'Nova', 'Radius', 'Force & Damage', 'Force & Damage', 'Radius', 'Power Recharge', 'Half Blast', 'Pierce', 'Sustain', 50, 50, 70],
						  ['MPPassive', 'Alliance Training', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 40, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 50, 30]];
			break;
		case 'Drell Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Power Synergy', 'Bonus Power', 'Barrier', 30, 40, 30],
						  ['Pull', 'Pull', 'Recharge Speed', 'Duration', 'Duration', 'Radius', 'Lift Damage', 'Expose', 'Duration & Combo', 'Recharge Speed', 40, 50, 60],
						  ['ClusterGrenade', 'Cluster Grenade', 'Max Grenades', 'Force & Damage', 'Force & Damage', 'Radius', 'Max Grenades', 'Damage Combo', 'Shrapnel', 'Force & Damage', 50, 60, 50],
						  ['MPPassive', 'Drell Assassin', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 30, 50, 30]];
			break;
		case 'Asari Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Power Synergy', 'Bonus Power', 'Barrier', 30, 40, 30],
						  ['Stasis', 'Stasis', 'Recharge Speed', 'Duration', 'Duration', 'Stasis Strength', 'Bonus Power', 'Recharge Speed', 'Bubble', 'Vulnerability', 50, 40, 70],
						  ['LiftGrenade', 'Lift Grenade', 'Max Grenades', 'Damage', 'Damage', 'Radius', 'Max Grenades', 'Duration', 'Slam', 'Damage & Radius', 50, 95, 15],
						  ['MPPassive', 'Asari Justicar', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Pistols', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 30, 50, 30]];
			break;
		case 'Krogan Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Melee Synergy', 'Bonus Power', 'Barrier', 30, 50, 30],
						  ['Carnage', 'Carnage', 'Recharge Speed', 'Damage', 'Radius', 'Damage', 'Incapacitate', 'Recharge Speed', 'Armor Damage', 'Damage', 50, 40, 50],
						  ['Barrier', 'Barrier', 'Recharge', 'Blast Effect', 'Blast Effect', 'Barrier Strength', 'Shield Recharge', 'Power Synergy', 'Power Recharge', 'Barrier Strength', 30, 40, 50],
						  ['MPPassive', 'Krogan Battlemaster', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Shotguns', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Rage', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Pure Rage', 'Fitness Expert', 50, 70, 60]];
			break;
		case 'Phoenix Project Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Power Synergy', 'Bonus Power', 'Barrier', 30, 40, 30],
						  ['Smash', 'Smash', 'Recharge Speed', 'Force & Damage', 'Biotic Combo', 'Electrical Damage', 'Force & Damage', 'Recharge Speed', 'Armor Damage', 'Impact Radius', 60, 50, 60],
						  ['Lash', 'Lash', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Recharge Speed', 'Damage Over Time', 'Fast Recharge', 'Shield Penetration', 30, 50, 30],
						  ['MPPassive', 'Phoenix Training', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Pistols & Shotguns', 'Weapon Damage', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'N7 Slayer Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Power Synergy', 'Bonus Power', 'Barrier', 30, 40, 40],
						  ['PhaseDisruptor', 'Phase Disruptor', 'Radius', 'Damage', 'Damage', 'Radius', 'Knockdown', 'Efficient Blast', 'Armor Damage', 'Shield Damage', 50, 20, 50],
						  ['BioticSlash', 'Biotic Slash', 'Recharge Speed', 'Damage', 'Damage', 'Radius', 'Detonate', 'Recharge Speed', 'Damage', 'Range', 50, 50, 50],
						  ['MPPassive', 'N7 Slayer', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Weapon Weight', 'Weapon Damage', 40, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 50, 50, 50]];
			break;
		case 'Volus Protector Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Power Synergy', 'Bonus Power', 'Barrier', 30, 60, 30],
						  ['ShieldBoost', 'Shield Boost', 'Recharge Speed', 'Shields', 'Impact Radius', 'Shields', 'Recharge Speed', 'Regeneration', 'Duration', 'Protection', 50, 50, 40],
						  ['BioticOrbs', 'Biotic Orbs', 'Recharge Speed', 'Damage', 'Damage', 'Impact Radius', 'Damage', 'Recharge Speed', 'Expose', 'Orb Count', 50, 40, 40],
						  ['MPPassive', 'Volus Training', 'Weapon Damage', 'Power Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Shield Boost', 'Weapon Weight', 'Weapon Damage', 50, 50, 30],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Power Synergy', 'Fitness Expert', 30, 50, 40]];
			break;
		case 'Batarian Brawler Vanguard':
			var powers = [['BioticCharge', 'Biotic Charge', 'Recharge Speed', 'Force & Damage', 'Force & Damage', 'Radius', 'Weapon Synergy', 'Power Synergy', 'Bonus Power', 'Barrier', 30, 60, 30],
						  ['Lash', 'Lash', 'Recharge Speed', 'Damage', 'Damage', 'Detonate', 'Recharge Speed', 'Damage Over Time', 'Fast Recharge', 'Shield Penetration', 30, 50, 30],
						  ['BladeArmor', 'Blade Armor', 'Recharge Speed', 'Melee Damage', 'Durability', 'Melee Damage', 'Recharge Speed', 'Damage Returned', 'Power Recharge', 'Durability', 30, 40, 50],
						  ['MPPassive', 'Batarian Enforcer', 'Power Damage', 'Weapon Damage', 'Weapon Damage', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Snipers & Shotguns', 'Damage & Ammo', 50, 60, 20],
						  ['MPFitness', 'Fitness', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 50, 70, 60]];
			break;
		case 'Cabal Vanguard':
			var powers = [['PoisonStrike', 'Poison Strike', 'Recharge Speed', 'Damage', 'Damage', 'Range', 'Poison Duration', 'Recharge Speed', 'Poison Strength', 'Double Dash', 50, 50, 60],
						  ['NightshadeBlades', 'Nightshade Blades', 'Capacity', 'Damage', 'Damage', 'Capacity', 'Range', 'Poison Duration', 'Enhanced Blades', 'Exploding Blades', 60, 50, 50],
						  ['BioticFocus', 'Biotic Focus', 'Recharge Speed', 'Duration', 'Damage Taken', 'Movement Speed', 'Duration', 'Melee Damage', 'Biotic Shield', 'Heightened Focus', 60, 60, 70],
						  ['MPPassive', 'Turian Veteran', 'Weapon Stability', 'Weapon Damage', 'Damage & Stability', 'Damage & Capacity', 'Power Damage', 'Headshots', 'Assault Rifles', 'Damage & Stability', 50, 60, 20],
						  ['MPFitness', 'Venom Gauntlets', 'Durability', 'Melee Damage', 'Melee Damage', 'Durability', 'Martial Artist', 'Shield Recharge', 'Melee Synergy', 'Fitness Expert', 40, 50, 40]];
			break;
	}
	
	if (!rerollChar) {
		var powerRanks, i;
		do {
			powerRanks = getPowerRanks();
		} while (powerRanks.join('/') === sessionStorage.getItem('powers'));
		sessionStorage.setItem('powers', powerRanks.join('/'));
	} else {
		var powerRanks = sessionStorage.getItem('powers').split('/');
	}
	
	for (var i = 0; i < 5; i++) {
		var elem = document.getElementById('power-' + i).children;
		elem[0].children[0].innerHTML = powers[i][1];
		var k = 1;
		for (var j = 1; j < 7; j++) {
			if (j<=3) {
				elem[j].children[0].children[0].src = 'resources/powers/' + powers[i][0] + '.png';
				elem[j].children[0].children[1].innerHTML = powers[i][k++];
			} else {
				elem[j].children[0].children[0].children[0].src = 'resources/powers/' + powers[i][0] + '.png';
				elem[j].children[0].children[0].children[1].innerHTML = powers[i][k++];
				elem[j].children[1].children[0].children[0].src = 'resources/powers/' + powers[i][0] + '.png';
				elem[j].children[1].children[0].children[1].innerHTML = powers[i][k++];
			}
		}
		for (j = 1; j < 7; j++) {
			if (j <= powerRanks[i]) {
				if (j<=3) {
					elem[j].style = 'background-position: -128px 0;';
				} else {
					if (Math.floor(Math.random()*100) < powers[i][j+6]) {
						elem[j].children[0].style = 'background-position: -128px 0;';
						elem[j].children[1].style = 'background-position: 0px 0;';
					} else {
						elem[j].children[0].style = 'background-position: 0px 0;';
						elem[j].children[1].style = 'background-position: -128px 0;';
					}
				}
			} else {
				if (j<=3) {
					elem[j].style = 'background-position: 0px 0;';
				} else {
					elem[j].children[0].style = 'background-position: 0px 0;';
					elem[j].children[1].style = 'background-position: 0px 0;';
				}
			}
		}
	}
}

function reRollPowers() {
	if (document.getElementById('power-0').children[0].children[0].innerHTML != "") rollPowers(false);
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
		var sndWeight = 70;
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
	disablePowers();
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
		document.getElementById('power-selector').style = 'style="display: inline-block;';
		rollPowers(false);
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

function disablePowers() {
	if (document.getElementById('chkRandPowers').checked) {
		document.getElementsByClassName('initialNoShow3')[0].style = 'display: inline-block;';
	} else {
		document.getElementsByClassName('initialNoShow3')[0].style = 'display: none;';
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
	disablePowers();
	disableWeapon();
	disableMods();
	disableAmmo();
	disableWeaponBonus();
	disableGear();
}
