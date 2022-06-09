package bullsAndCows;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class Stadium {

	static BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		//경기를 안내함
		//

		Stadium stadium = new Stadium();
		
		bw.write("경기장에 오신걸 환영합니다!\n숫자 4개를 던져주세요\n");
		bw.flush();
		stadium.game();
		bw.flush();
		bw.close();
		
		
	}
	public void game() throws IOException{
		Referee rf = new Referee();
		int[] score = {0,0};
		int strike = 0;
		int count = 0;
		int[] catchBalls = rf.CatchBalls();
		while(strike<4) {
			score = rf.referee(catchBalls);
			count++;
			if(score[0]==4) {
				bw.write(count+"번만에 승리하셨습니다!! ✨축하합니다✨");
				break;
			}else if(score[0] == 5) {
				bw.write("게임을 종료합니다.");
				break;
			}
		}
		
	}

}
