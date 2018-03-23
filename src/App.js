import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'

function App(){
	return (
		<div>
			<Header title={"Пятнашки"}/>
			<Cell />
				<table>
					<tbody>
			      <tr>
			        <td><div>1</div></td>
			        <td><div>2</div></td>
			        <td><div>3</div></td>
			        <td><div>4</div></td>
			      </tr>
			      <tr>
			        <td><div>5</div></td>
			        <td><div>6</div></td>
			        <td><div>7</div></td>
			        <td><div>8</div></td>
			      </tr>
			      <tr>
			        <td><div>9</div></td>
			        <td><div>10</div></td>
			        <td><div>11</div></td>
			        <td><div>12</div></td>
			      </tr>
			      <tr>
			        <td><div>13</div></td>
			        <td><div>14</div></td>
			        <td><div>15</div></td>
			        <td><div>16</div></td>
			      </tr>
					  </tbody>
				</table>
		</div>
	)
}

export default App;