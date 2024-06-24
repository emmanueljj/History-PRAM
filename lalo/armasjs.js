document.addEventListener('DOMContentLoaded', () => {
    const countries = document.querySelectorAll('.country');

    countries.forEach(country => {
        country.addEventListener('click', () => {
            const countryId = country.getAttribute('data-country');
            const existingTable = country.nextElementSibling;

            if (existingTable && existingTable.classList.contains('details-table')) {
                existingTable.remove();
                return; 
            }

          
            document.querySelectorAll('.details-table').forEach(table => {
                table.remove();
            });
      
            const detailsTable = document.createElement('div');
            detailsTable.classList.add('details-table');
            detailsTable.innerHTML = getDetailsTableHtml(countryId);
            detailsTable.style.display = 'block';
        
            country.insertAdjacentElement('afterend', detailsTable);
        });
    });
});

function getDetailsTableHtml(countryId) {
    const data = {
        'usa': `
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Historia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/M1_Garand_rifle_USA_noBg.jpg/1200px-M1_Garand_rifle_USA_noBg.jpg" alt="M1 Garand" class="weapon-photo"></td>
                        <td>M1 Garand</td>
                        <td>El M1 Garand fue el rifle estándar de infantería de los Estados Unidos durante la Segunda Guerra Mundial.</td>
                    </tr>
                    <tr>
                        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Soldier_with_Bazooka_M1.jpg/1200px-Soldier_with_Bazooka_M1.jpg" alt="M4 Sherman" class="weapon-photo"></td>
                        <td>Boozoka</td>
                        <td>La Boozoka o Bauska era un arma de largo alcanze para derribar pequeños aviones de combate o tanques </td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nsti7BCvNXC-npQomvko7QgoqP8y8-k4JA&s" alt="M4 Sgerman" class="weapon-photo"</td>
                        <td>M4 Sherman</td>
                        <td>Principal tanque medio utilizado por los Aliados.</td>
                    </tr>
                    <tr>
                        <td><img src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/04/533559-subasta-jeep-wyllis-mb-1942-frontal.jpg?tf=3840x" alt="Jeep Willys MB" class="weapon-photo"></td>
                        <td>Jeep Willys MB</td>
                        <td>Una de los vehiculos mas reconocidos seguramente sea la Jeep Willys MB, camioneta todo terreno multifuncional</td>
                    </tr>
                    <tr>
                        <td><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/375th_Fighter_Squadron_North_American_P-51D-5-NA_Mustang_44-13926.jpg" alt="P-15 Mustang" class="weapon-photo"> </td>
                        <td>P-15 Mustang</td>
                        <td>Casa de largo alcanze</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlPDN6cSLpij5w_1aZT1ISzyHOgtkkDNZ6g&s" alt="B-17 Flying Fortress" class="weapon-photo"></td>
                        <td>B-17 Flying Fortress</td>
                        <td>Bombardero Pesado</td>
                    </tr>
                </tbody>
            </table>
        `,
        'germany': `
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Historia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SHKXMfP45XPUbC98lqSiI-bYW4efAb5THQ&s" alt="MP40" class="weapon-photo"></td>
                        <td>MP40</td>
                        <td>El MP40 fue un subfusil ampliamente utilizado por las tropas alemanas durante la Segunda Guerra Mundial.</td>
                    </tr>
                    <tr>
                        <td><img src="https://www.historynet.com/wp-content/uploads/2017/08/gun-1200x480.jpg" alt="MG-42" class="weapon-photo"></td>
                        <td>MG-40</td>
                        <td>El MG-40 fue un rifle pesado que normalmente iba sobre camionetas o estaba plantados por su gran peso y dificil traslado</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV66iVNupBwA1tWmZJp2NCtMwu-xtebGJnqg&s" alt="Panzer IV" class="weapon-photo"></td>
                        <td>Panzer IV</td>
                        <td>El Panzer IV fue uno de los tanques más importantes de Alemania durante la Segunda Guerra Mundial.</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qAaVj4Wss4M_ZB1SECf7GbmCuY6h1hCRog&s" alt="Tiger I" class="weapon-photo"></td>
                        <td>Tiger I</td>
                        <td>Tanque pesado</td>
                    </tr>
                    <tr>
                        <td><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Bundesarchiv_Bild_101I-662-6659-37%2C_Flugzeug_Messerschmitt_Me_109_Recolored.jpg" alt="Messerschmitt Bf 109" class="weapon-photo"></td>
                        <td>Messerschmitt Bf 109</td>
                        <td>Avion de caza</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIT_QjdWjN17b2AoBcbrCHG8_bmDn4ef3UA&s" alt="junkers Ju 87 Stuka" class="weapon-photo"></td>
                        <td>junkers Ju 87 Stuka</td>
                        <td>Ese es un bombardero en picada, como su nombre lo dice, tiene que ir en picada para una mayor efectividad</td>
                    </tr>
                </tbody>
            </table>
        `,
        'japan': `
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Historia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EepgVR8tUbFypR9mJEEKgiKxKcRg_f4WhQ&s" alt="Arisaka" class="weapon-photo"></td>
                        <td>Arisaka</td>
                        <td>El rifle Arisaka fue una de las armas de infantería estándar de Japón durante la Segunda Guerra Mundial.</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBUFq9_UOT5BMGCUAzPpJAqH1mL9RFMk9jw&s" class="weapon-photo"></td>
                        <td>Arisaka Type 99</td>
                        <td>Rifle estándar de infantería.</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOND7gdhISGppIZ6ipMQ8Oyw5twBCXjl5aew&s" class="weapon-photo"></td>
                        <td>Mitsubishi A6M Zero</td>
                        <td>El Mitsubishi A6M Zero fue el principal avión de combate japonés durante la Segunda Guerra Mundial.</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndoratRU1kA_BjMEYWmFE2CGPWGpHg42y1A&s" class="weapon-photo"></td>
                        <td>Nakajima B5N</td>
                        <td>Bombadero de picada</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyr3u2mR5AsnVF3UsiWTrnLyRRTQL0woZ1w&s" class="weapon-photo"></td>
                        <td>Type 95 Ha-Go</td>
                        <td>Tanque logero</td>
                    </tr>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Nbc2Ms2H2ekomXxBVvt57_XAb2MeeIambg&s" class="weapon-photo"></td>
                        <td>Type 97 Chi-Ha</td>
                        <td>Tanque Medio</td>
                    </tr>
                </tbody>
            </table>
        `,
        'Francia': `
            <table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Historia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhPzcAD3auqyOd9cH785clb-kEbeGAwtduQ&s" alt="Arisaka" class="weapon-photo"></td>
                        <td>Fusil MAS-36</td>
                        <td>FUsil Ligero</td>
                    </tr>
                    <tr>
                        <td><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/MAS_Mod%C3%A8le_36_noBG.png" class="weapon-photo"></td>
                        <td>Fusil MAS-36</td>
                        <td>El Fudil Mas-36 fue el principal avión de combate frances durante la Segunda Guerra Mundial.</td>
                    </tr>
                </tbody>
            </table>
        `,
      
    };
    return data[countryId] || '<p>No hay información disponible.</p>';
}
