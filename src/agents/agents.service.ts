import { Injectable } from '@nestjs/common';
import { Agent } from './entities/agent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
  
@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,

  ){}

  async createAgent(agentData: Agent): Promise<Agent> {
    const agent = this.agentRepository.create(agentData);
    return this.agentRepository.save(agent);
  }

  async getAgentById(id: number): Promise<Agent> {
    return this.agentRepository.findOne({ where: { id } });
  }


  async updateAgent(id: number, agentData: Agent): Promise<Agent> {
    const agent = await this.getAgentById(id);
    this.agentRepository.merge(agent, agentData);
    return this.agentRepository.save(agent);
  }


  async deleteAgent(id: number): Promise<void> {
    await this.agentRepository.delete(id);
  }
  // findAll() {
  //   return `This action returns all agents`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} agent`;
  // }

  // update(id: number, updateAgentDto: UpdateAgentDto) {
  //   return `This action updates a #${id} agent`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} agent`;
  // }
}
