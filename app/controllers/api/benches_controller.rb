class Api::BenchesController < ApplicationController

    def create
        @bench = Bench.new(bench_params)

        if @bench.save
            render :create
        else
            render json: ["Not a valid bench"], status: 422
        end

    end


    def index

        @benches = Bench.in_bounds(params[:bounds]).where("seats >= ? and seats <= ?", params[:min_seating], params[:max_seating])
        render :index

    end

    def show
        @bench = Bench.find(params[:id])
        render :show
    end


    private 

    def bench_params
        params.require(:bench).permit(:description, :lat, :long, :seats, :max_seating, :min_seating, :photo)
    end
end
