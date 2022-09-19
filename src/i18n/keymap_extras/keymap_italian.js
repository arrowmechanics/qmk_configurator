/* Copyright 2022 - Generated by convert_keymap_extras_header.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default {
  /*
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ \ │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ ' │ ì │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ è │ + │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ A │ S │ D │ F │ G │ H │ J │ K │ L │ ò │ à │ ù │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ < │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ - │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  KC_GRV: { name: '|\n\\', title: 'IT_BSLS' },
  KC_1: { name: '!\n1', title: 'IT_1' },
  KC_2: { name: '"\n2', title: 'IT_2' },
  KC_3: { name: '£\n3', title: 'IT_3' },
  KC_4: { name: '$\n4', title: 'IT_4' },
  KC_5: { name: '%\n5', title: 'IT_5' },
  KC_6: { name: '&\n6', title: 'IT_6' },
  KC_7: { name: '/\n7', title: 'IT_7' },
  KC_8: { name: '(\n8', title: 'IT_8' },
  KC_9: { name: ')\n9', title: 'IT_9' },
  KC_0: { name: '=\n0', title: 'IT_0' },
  KC_MINS: { name: "?\n'", title: 'IT_QUOT' },
  KC_EQL: { name: '^\nì', title: 'IT_IGRV' },
  // Row 2
  KC_Q: { name: 'Q', title: 'IT_Q' },
  KC_W: { name: 'W', title: 'IT_W' },
  KC_E: { name: 'E', title: 'IT_E' },
  KC_R: { name: 'R', title: 'IT_R' },
  KC_T: { name: 'T', title: 'IT_T' },
  KC_Y: { name: 'Y', title: 'IT_Y' },
  KC_U: { name: 'U', title: 'IT_U' },
  KC_I: { name: 'I', title: 'IT_I' },
  KC_O: { name: 'O', title: 'IT_O' },
  KC_P: { name: 'P', title: 'IT_P' },
  KC_LBRC: { name: 'é\nè', title: 'IT_EGRV' },
  KC_RBRC: { name: '*\n+', title: 'IT_PLUS' },
  // Row 3
  KC_A: { name: 'A', title: 'IT_A' },
  KC_S: { name: 'S', title: 'IT_S' },
  KC_D: { name: 'D', title: 'IT_D' },
  KC_F: { name: 'F', title: 'IT_F' },
  KC_G: { name: 'G', title: 'IT_G' },
  KC_H: { name: 'H', title: 'IT_H' },
  KC_J: { name: 'J', title: 'IT_J' },
  KC_K: { name: 'K', title: 'IT_K' },
  KC_L: { name: 'L', title: 'IT_L' },
  KC_SCLN: { name: 'ç\nò', title: 'IT_OGRV' },
  KC_QUOT: { name: '°\nà', title: 'IT_AGRV' },
  KC_NUHS: { name: '§\nù', title: 'IT_UGRV' },
  // Row 4
  KC_NUBS: { name: '>\n<', title: 'IT_LABK' },
  KC_Z: { name: 'Z', title: 'IT_Z' },
  KC_X: { name: 'X', title: 'IT_X' },
  KC_C: { name: 'C', title: 'IT_C' },
  KC_B: { name: 'B', title: 'IT_B' },
  KC_V: { name: 'V', title: 'IT_V' },
  KC_N: { name: 'N', title: 'IT_N' },
  KC_M: { name: 'M', title: 'IT_M' },
  KC_COMM: { name: ';\n,', title: 'IT_COMM' },
  KC_DOT: { name: ':\n.', title: 'IT_DOT' },
  KC_SLSH: { name: '_\n-', title: 'IT_MINS' },

  /* Shifted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ | │ ! │ " │ £ │ $ │ % │ & │ / │ ( │ ) │ = │ ? │ ^ │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │   │   │   │   │   │   │   │ é │ * │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │ ç │ ° │ § │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ > │   │   │   │   │   │   │   │ ; │ : │ _ │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'S(KC_GRV)': { name: '|', title: 'IT_PIPE' },
  KC_TILD: { name: '|', title: 'IT_PIPE' },
  'S(KC_1)': { name: '!', title: 'IT_EXLM' },
  KC_EXLM: { name: '!', title: 'IT_EXLM' },
  'S(KC_2)': { name: '"', title: 'IT_DQUO' },
  KC_AT: { name: '"', title: 'IT_DQUO' },
  'S(KC_3)': { name: '£', title: 'IT_PND' },
  KC_HASH: { name: '£', title: 'IT_PND' },
  'S(KC_4)': { name: '$', title: 'IT_DLR' },
  KC_DLR: { name: '$', title: 'IT_DLR' },
  'S(KC_5)': { name: '%', title: 'IT_PERC' },
  KC_PERC: { name: '%', title: 'IT_PERC' },
  'S(KC_6)': { name: '&', title: 'IT_AMPR' },
  KC_CIRC: { name: '&', title: 'IT_AMPR' },
  'S(KC_7)': { name: '/', title: 'IT_SLSH' },
  KC_AMPR: { name: '/', title: 'IT_SLSH' },
  'S(KC_8)': { name: '(', title: 'IT_LPRN' },
  KC_ASTR: { name: '(', title: 'IT_LPRN' },
  'S(KC_9)': { name: ')', title: 'IT_RPRN' },
  KC_LPRN: { name: ')', title: 'IT_RPRN' },
  'S(KC_0)': { name: '=', title: 'IT_EQL' },
  KC_RPRN: { name: '=', title: 'IT_EQL' },
  'S(KC_MINS)': { name: '?', title: 'IT_QUES' },
  KC_UNDS: { name: '?', title: 'IT_QUES' },
  'S(KC_EQL)': { name: '^', title: 'IT_CIRC' },
  KC_PLUS: { name: '^', title: 'IT_CIRC' },
  // Row 2
  'S(KC_LBRC)': { name: 'é', title: 'IT_EACU' },
  KC_LCBR: { name: 'é', title: 'IT_EACU' },
  'S(KC_RBRC)': { name: '*', title: 'IT_ASTR' },
  KC_RCBR: { name: '*', title: 'IT_ASTR' },
  // Row 3
  'S(KC_SCLN)': { name: 'ç', title: 'IT_CCED' },
  KC_COLN: { name: 'ç', title: 'IT_CCED' },
  'S(KC_QUOT)': { name: '°', title: 'IT_DEG' },
  KC_DQUO: { name: '°', title: 'IT_DEG' },
  'S(KC_NUHS)': { name: '§', title: 'IT_SECT' },
  // Row 4
  'S(KC_NUBS)': { name: '>', title: 'IT_RABK' },
  'S(KC_DOT)': { name: ':', title: 'IT_COLN' },
  KC_GT: { name: ':', title: 'IT_COLN' },
  'S(KC_COMM)': { name: ';', title: 'IT_SCLN' },
  KC_LT: { name: ';', title: 'IT_SCLN' },
  'S(KC_SLSH)': { name: '_', title: 'IT_UNDS' },
  KC_QUES: { name: '_', title: 'IT_UNDS' },

  /* AltGr symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │   │   │   │   │   │   │   │   │   │   │   │   │   │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │ € │   │   │   │   │   │   │   │ [ │ ] │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │ @ │ # │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │   │   │   │   │   │   │   │   │   │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 2
  'ALGR(KC_E)': { name: '€', title: 'IT_EURO' },
  'ALGR(KC_LBRC)': { name: '[', title: 'IT_LBRC' },
  'ALGR(KC_RBRC)': { name: ']', title: 'IT_RBRC' },
  // Row 3
  'ALGR(KC_SCLN)': { name: '@', title: 'IT_AT' },
  'ALGR(KC_QUOT)': { name: '#', title: 'IT_HASH' },

  /* Shift+AltGr symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │   │   │   │   │   │   │   │   │   │   │   │   │   │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │   │   │   │   │   │   │   │ { │ } │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │   │   │   │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │   │   │   │   │   │   │   │   │   │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 2
  'S(ALGR(KC_LBRC))': { name: '{', title: 'IT_LCBR' },
  'S(ALGR(KC_RBRC))': { name: '}', title: 'IT_RCBR' },

  /* Other keys */
  KC_BSLS: { name: '§\nù', title: '' },
  'S(KC_BSLS)': { name: '§', title: '' },
  KC_PIPE: { name: '§', title: 'IT_SECT' },

  KC_LSPO: { name: 'LS / )', title: 'Left Shift when held, ) when tapped' },
  KC_RSPC: { name: 'RS / =', title: 'Right Shift when held, = when tapped' },
  KC_LCPO: { name: 'LC / )', title: 'Left Control when held, ) when tapped' },
  KC_RCPC: { name: 'RC / =', title: 'Right Control when held, = when tapped' },
  KC_LAPO: { name: 'LA / )', title: 'Left Alt when held, ) when tapped' },
  KC_RAPC: { name: 'RA / =', title: 'Right Alt when held, = when tapped' },

  QK_GESC: {
    name: '\\/|\nEsc',
    title: 'Esc normally, but \\ when GUI is active or | when Shift is active'
  }
};
